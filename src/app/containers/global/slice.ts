import { PayloadAction } from "@reduxjs/toolkit";
import { WORKSHOPS, Workshops } from "config";
import { createSlice } from "store/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../store/redux-injectors";
import { useFetchInitialData } from "./hooks/useFetchInitialData";
import { globalSaga } from "./saga";

export interface GlobalState {
  workshops: {
    [key in Workshops]: {
      nftIds?: string[];
      abi: any;
      address: string;
      isLoadingMetadatas?: boolean;
    };
  };
}
// The initial state of the LoginPage container
export const initialState: GlobalState = {
  workshops: WORKSHOPS,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    fetchNFTIds: (state, action: PayloadAction<{ workshop: Workshops }>) => {},
    setIsLoadingWorkshop: (
      state,
      action: PayloadAction<{ workshop: Workshops; isLoading: boolean }>
    ) => {
      state.workshops[action.payload.workshop].isLoadingMetadatas =
        action.payload.isLoading;
    },
  },
});

export const {
  actions: GlobalActions,
  reducer: globalReducer,
  name: sliceKey,
} = globalSlice;
export const useGlobalSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: globalReducer });
  useInjectSaga({ key: sliceKey, saga: globalSaga });
  useFetchInitialData();
};
import { PayloadAction } from "@reduxjs/toolkit";
import { WORKSHOPS, Workshops } from "config";
import { createSlice } from "store/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../store/redux-injectors";
import { useShopSlice } from "../shop/slice";
import { useFetchInitialData } from "./hooks/useFetchInitialData";
import { globalSaga } from "./saga";
import { WorkshopInfo, NFT } from "./types";

export interface GlobalState {
  workshops: {
    [key in Workshops]: {
      nftIds?: string[];
      abi: any;
      address: string;
      strokes: number;
      isLoadingMetadatas?: boolean;
      nfts?: NFT[];
      infos?: WorkshopInfo[];
      info: {
        name: string;
        descriptions: string;
        inspiration: string;
      };
      creatorInfo: {
        name: string;
        descriptions: string;
        image: string;
      };
    };
  };
  randomNFTs: {
    [key in Workshops]?: NFT[];
  };
}
// The initial state of the LoginPage container
export const initialState: GlobalState = {
  workshops: WORKSHOPS,
  randomNFTs: {
    membership: [],
    abominablesasquatch: [],
  },
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    fetchNFTIds: (state, action: PayloadAction<{ workshop: Workshops }>) => {},
    getWorkshopInfo: (
      state,
      action: PayloadAction<{ workshop: Workshops }>
    ) => {},
    setWorkshopInfos: (
      state,
      action: PayloadAction<{ workshop: Workshops; infos: WorkshopInfo[] }>
    ) => {
      state.workshops[action.payload.workshop].infos = action.payload.infos;
    },
    setIsLoadingWorkshop: (
      state,
      action: PayloadAction<{ workshop: Workshops; isLoading: boolean }>
    ) => {
      state.workshops[action.payload.workshop].isLoadingMetadatas =
        action.payload.isLoading;
    },
    setWorkshopNFTs: (
      state,
      action: PayloadAction<{ workshop: Workshops; nfts: NFT[] }>
    ) => {
      state.workshops[action.payload.workshop].nfts = action.payload.nfts;
    },
    setRandomNFTs: (
      state,
      action: PayloadAction<{ workshop: Workshops; nfts: NFT[] }>
    ) => {
      state.randomNFTs[action.payload.workshop] = action.payload.nfts;
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
  useShopSlice();
};

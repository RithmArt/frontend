import { createSlice } from "store/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../store/redux-injectors";
import { globalSaga } from "./saga";

export interface GlobalState {}
// The initial state of the LoginPage container
export const initialState: GlobalState = {};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export const {
  actions: GlobalActions,
  reducer: globalReducer,
  name: sliceKey,
} = globalSlice;
export const useGlobalSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: globalReducer });
  useInjectSaga({ key: sliceKey, saga: globalSaga });
  return { GlobalActions };
};

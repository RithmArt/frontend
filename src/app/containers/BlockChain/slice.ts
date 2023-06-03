import { createSlice } from "store/toolkit";
import { ContainerState } from "./types";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { blockChainSaga } from "./saga";

// The initial state of the BlockChain container
export const initialState: ContainerState = {};

const blockChainSlice = createSlice({
  name: "blockChain",
  initialState,
  reducers: {},
});

export const {
  actions: BlockChainActions,
  reducer: BlockChainReducer,
  name: sliceKey,
} = blockChainSlice;

export const useBlockChainSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: BlockChainReducer });
  useInjectSaga({ key: sliceKey, saga: blockChainSaga });
  return { BlockChainActions };
};

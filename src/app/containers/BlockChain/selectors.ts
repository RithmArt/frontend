import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { RootState } from "store/types";

export const BlockChainDomains = {
  selectBlockChainDomain: (state: RootState) =>
    state.blockChain || initialState,
};

export const BlockChainSelectors = {
  selectBlockChain: createSelector(
    BlockChainDomains.selectBlockChainDomain,
    (blockChainState) => blockChainState
  ),
};

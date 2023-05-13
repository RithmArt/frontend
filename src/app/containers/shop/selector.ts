import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/types";

export const shopDomains = {
  root: (state: RootState) => state.shop,
  isMintingNft: (state: RootState) => state.shop.isMintingNft,
};
export const shopSelectors = {
  root: createSelector([shopDomains.root], (root) => root),
  isMintingNft: createSelector(
    [shopDomains.isMintingNft],
    (isMintingNft) => isMintingNft
  ),
};

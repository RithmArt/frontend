import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/types";

export const GlobalDomains = {
  root: (state: RootState) => state,
  workshops: (state: RootState) => state.global?.workshops,
};

export const globalSelectors = {
  root: createSelector([GlobalDomains.root], (root) => root),
  workshops: createSelector(
    [GlobalDomains.workshops],
    (workshops) => workshops
  ),
};

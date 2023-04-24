import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "app/containers/global/slice";
import { RootState } from "store/types";

export const GlobalDomains = {
  root: (state: RootState) => state,
};

export const globalSelectors = {
  root: createSelector([GlobalDomains.root], (root) => root),
};

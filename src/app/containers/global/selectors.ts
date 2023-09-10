import { createSelector } from "@reduxjs/toolkit";
import { Workshops } from "config";
import { RootState } from "store/types";
import { MoralisNftResult } from "./types";

export const GlobalDomains = {
  root: (state: RootState) => state,
  workshops: (state: RootState) => state.global?.workshops,
  randomNfts: (state: RootState) => state.global?.randomNFTs,
  selectedNftToShow: (state: RootState) => state.global?.selectedNftToShow,
  treasuryNfts: (state: RootState) => state.global?.treasuryNFTs,
  transactionSuccessId: (state: RootState) =>
    state.global?.transactionSuccessId,
};

export const globalSelectors = {
  root: createSelector([GlobalDomains.root], (root) => root),
  workshops: createSelector(
    [GlobalDomains.workshops],
    (workshops) => workshops
  ),
  allNfts: (workshop?: Workshops) => {
    return createSelector(GlobalDomains.workshops, (workshops) => {
      const nfts: MoralisNftResult[] = [];
      if (workshops) {
        if (!workshop) {
          Object.keys(workshops).forEach((workshop) => {
            nfts.push(...(workshops[workshop]?.nfts || []));
          });
        } else {
          nfts.push(...(workshops[workshop]?.nfts || []));
        }
      }
      return nfts;
    });
  },
  allRandomNFTs: createSelector(GlobalDomains.randomNfts, (randomNfts) => {
    const nfts: MoralisNftResult[] = [];
    if (randomNfts) {
      Object.keys(randomNfts).forEach((workshop) => {
        nfts.push(...(randomNfts[workshop] || []));
      });
    }
    return nfts;
  }),
  randomNfts: (workshop: Workshops) => {
    return createSelector(GlobalDomains.randomNfts, (randomNfts) => {
      if (randomNfts) {
        return randomNfts[workshop];
      }
      return [];
    });
  },
  workshopInfos: (workshop: Workshops) => {
    return createSelector([GlobalDomains.workshops], (workshops) => {
      if (workshops) {
        return workshops[workshop]?.infos;
      }
      return [];
    });
  },
  selectedNftToShow: createSelector(
    [GlobalDomains.selectedNftToShow],
    (nft) => nft
  ),
  treasuryNfts: createSelector(
    [GlobalDomains.treasuryNfts],
    (treasuryNfts) => treasuryNfts
  ),
  transactionSuccessId: createSelector(
    [GlobalDomains.transactionSuccessId],
    (transactionSuccessId) => transactionSuccessId
  ),
};

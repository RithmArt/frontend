import { createSelector } from "@reduxjs/toolkit";
import { Workshops } from "config";
import { RootState } from "store/types";
import { NFT } from "./types";

export const GlobalDomains = {
  root: (state: RootState) => state,
  workshops: (state: RootState) => state.global?.workshops,
  randomNfts: (state: RootState) => state.global?.randomNFTs,
};

export const globalSelectors = {
  root: createSelector([GlobalDomains.root], (root) => root),
  workshops: createSelector(
    [GlobalDomains.workshops],
    (workshops) => workshops
  ),
  allNfts: (workshop?: Workshops) => {
    return createSelector(GlobalDomains.workshops, (workshops) => {
      const nfts: NFT[] = [];
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
    const nfts: NFT[] = [];
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
};

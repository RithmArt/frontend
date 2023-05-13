import { PayloadAction } from "@reduxjs/toolkit";
import {
  MAX_NFTS_TO_FETCH_ON_START,
  WorkshopContract,
  WORKSHOPS,
  Workshops,
} from "config";
import { BigNumber } from "ethers";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { resolveAny } from "../utils/resolveAny";
import { fetchNFTMetadata } from "./providers/getNftMetadata";
import { GlobalActions } from "./slice";
import { NFT, WorkshopInfo } from "./types";
import { getWorkshopContract } from "./utils/getWorkshopContract";

function* fetchNFTIds(action: PayloadAction<{ workshop: Workshops }>) {
  try {
    yield put(
      GlobalActions.setIsLoadingWorkshop({
        workshop: action.payload.workshop,
        isLoading: true,
      })
    );
    const workshopContract = yield call(getWorkshopContract, {
      ws: action.payload.workshop,
      useToGetData: true,
    });
    const totalSupply: BigNumber = yield call(workshopContract.totalSupply);
    const intTotalSupply = parseInt(totalSupply.toString());
    const numberToGet =
      MAX_NFTS_TO_FETCH_ON_START <= intTotalSupply
        ? MAX_NFTS_TO_FETCH_ON_START
        : intTotalSupply;
    const contractsToCall: any[] = [];
    for (let i = 0; i < numberToGet; i++) {
      const contractCall = call(workshopContract.tokenByIndex, i);
      contractsToCall.push(contractCall);
    }

    const nftIds: BigNumber[] = yield call(resolveAny, contractsToCall);

    const contractsToCallToFetchNFT_Uris: any[] = [];
    for (let i = 0; i < nftIds.length; i++) {
      const bigNumberId = nftIds[i];
      const intId = parseInt(bigNumberId.toString());
      const contractCall = call(workshopContract.tokenURI, intId);
      contractsToCallToFetchNFT_Uris.push(contractCall);
    }

    const nftUris = yield call(resolveAny, contractsToCallToFetchNFT_Uris);
    const fetchArray: any = [];
    for (let i = 0; i < nftUris.length; i++) {
      const uri = nftUris[i];
      const apiCall = call(fetchNFTMetadata, uri);
      fetchArray.push(apiCall);
    }

    const nftMetadata: NFT[] = yield call(resolveAny, fetchArray);
    for (let i = 0; i < nftMetadata.length; i++) {
      const nft = nftMetadata[i];
      nft.id = parseInt(nftIds[i].toString());
    }
    yield put(
      GlobalActions.setWorkshopNFTs({
        workshop: action.payload.workshop,
        nfts: nftMetadata,
      })
    );
    const randomized = [...nftMetadata].sort(() => Math.random() - 0.5);
    yield put(
      GlobalActions.setRandomNFTs({
        workshop: action.payload.workshop,
        nfts: randomized,
      })
    );
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(
      GlobalActions.setIsLoadingWorkshop({
        workshop: action.payload.workshop,
        isLoading: false,
      })
    );
  }
}
function* getWorkshopInfo(action: PayloadAction<{ workshop: Workshops }>) {
  try {
    const workshopContract: WorkshopContract = yield call(getWorkshopContract, {
      ws: action.payload.workshop,
      useToGetData: true,
    });
    const workshop = WORKSHOPS[action.payload.workshop];
    const strokes = workshop.strokes;
    const contractsToCall: any[] = [];
    for (let i = 1; i <= strokes; i++) {
      const contractCall = call(workshopContract.getCollectionInfo, i);
      contractsToCall.push(contractCall);
    }
    const infos: WorkshopInfo[] = [];
    const res = yield all(contractsToCall);
    for (let i = 0; i < res.length; i++) {
      const info = res[i];
      infos.push({
        invocations: info[0],
        maxInvocations: info[1],
        script: info[2],
        price: info[3],
        artist: info[4],
        artistPercentage: info[5],
      });
    }
    yield put(
      GlobalActions.setWorkshopInfos({
        workshop: action.payload.workshop,
        infos: infos,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export function* globalSaga() {
  yield takeEvery(GlobalActions.fetchNFTIds.type, fetchNFTIds);
  yield takeEvery(GlobalActions.getWorkshopInfo.type, getWorkshopInfo);
}

import { PayloadAction } from "@reduxjs/toolkit";
import {
  treasuryAddress,
  WorkshopContract,
  WORKSHOPS,
  Workshops,
} from "config";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  getNFTsFromMoralis,
  startMoralis,
} from "../BlockChain/providers/fetchNftsApi";
import { GlobalActions } from "./slice";
import { MoralisNftResult, WorkshopInfo } from "./types";
import { getWorkshopContract } from "./utils/getWorkshopContract";

function* fetchNFTIds(action: PayloadAction<{ workshop: Workshops }>) {
  try {
    yield put(
      GlobalActions.setIsLoadingWorkshop({
        workshop: action.payload.workshop,
        isLoading: true,
      })
    );

    const nfts: MoralisNftResult[] = yield call(getNFTsFromMoralis, {
      getBy: "contractAddress",
      address: WORKSHOPS[action.payload.workshop].address,
    });

    yield put(
      GlobalActions.setWorkshopNFTs({
        workshop: action.payload.workshop,
        nfts,
      })
    );
    const randomized = [...nfts].sort(() => Math.random() - 0.5);
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
  yield call(startMoralis);
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

function* getTreasuryNFTs() {
  try {
    yield put(GlobalActions.setIsLoadingTreasuryNfts(true));
    const res: MoralisNftResult[] = yield call(getNFTsFromMoralis, {
      getBy: "walletAddress",
      address: treasuryAddress,
    });
    yield put(GlobalActions.setTreasuryNfts(res));
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(GlobalActions.setIsLoadingTreasuryNfts(false));
  }
}

export function* globalSaga() {
  yield takeEvery(GlobalActions.fetchNFTIds.type, fetchNFTIds);
  yield takeEvery(GlobalActions.getWorkshopInfo.type, getWorkshopInfo);
  yield takeEvery(GlobalActions.getTreasuryNFTs.type, getTreasuryNFTs);
}

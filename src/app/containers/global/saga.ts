import { PayloadAction } from "@reduxjs/toolkit";
import { WorkshopContract, WORKSHOPS, Workshops } from "config";
import { BigNumber, Contract } from "ethers";
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { Web3Domains } from "../BlockChain/Web3/selectors";
import { fetchNFTMetadata } from "./providers/getNftMetadata";
import { GlobalActions } from "./slice";
import { NFT, WorkshopInfo } from "./types";

function* getWorkshopContract(ws: Workshops) {
  const workshop = WORKSHOPS[ws];
  const library = yield select(Web3Domains.selectNetworkLibraryDomain);
  const workshopContract = new Contract(
    workshop.address,
    workshop.abi,
    library.getSigner()
  ) as WorkshopContract;
  return workshopContract;
}

function* fetchNFTIds(action: PayloadAction<{ workshop: Workshops }>) {
  try {
    yield put(
      GlobalActions.setIsLoadingWorkshop({
        workshop: action.payload.workshop,
        isLoading: true,
      })
    );
    const workshopContract = yield call(
      getWorkshopContract,
      action.payload.workshop
    );
    const totalSupply: BigNumber = yield call(workshopContract.totalSupply);
    const intTotalSupply = parseInt(totalSupply.toString());
    const contractsToCall: any[] = [];
    for (let i = 0; i < intTotalSupply; i++) {
      const contractCall = call(workshopContract.tokenByIndex, i);
      contractsToCall.push(contractCall);
    }
    const nftIds: BigNumber[] = yield all(contractsToCall);

    const notractsTocall2: any[] = [];
    for (let i = 0; i < nftIds.length; i++) {
      const bigNumberId = nftIds[i];
      const intId = parseInt(bigNumberId.toString());
      const contractCall = call(workshopContract.tokenURI, intId);
      notractsTocall2.push(contractCall);
    }
    const nftUris: string[] = yield all(notractsTocall2);
    const fetchArray: any = [];
    for (let i = 0; i < nftUris.length; i++) {
      const uri = nftUris[i];
      const apiCall = call(fetchNFTMetadata, uri);
      fetchArray.push(apiCall);
    }
    const nftMetadata: NFT[] = yield all(fetchArray);
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
  } catch (error) {
    console.log({ error });
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
    const workshopContract: WorkshopContract = yield call(
      getWorkshopContract,
      action.payload.workshop
    );
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

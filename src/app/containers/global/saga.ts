import { PayloadAction } from "@reduxjs/toolkit";
import { AbominableSasquatchWorkshop, Membership } from "abi/abi-types";
import { WORKSHOPS, Workshops } from "config";
import { BigNumber, Contract } from "ethers";
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { Web3Domains } from "../BlockChain/Web3/selectors";
import { fetchNFTMetadata } from "./providers/getNftMetadata";
import { GlobalActions } from "./slice";
import { NFT } from "./types";

function* fetchNFTIds(action: PayloadAction<{ workshop: Workshops }>) {
  try {
    yield put(
      GlobalActions.setIsLoadingWorkshop({
        workshop: action.payload.workshop,
        isLoading: true,
      })
    );
    const workshop = WORKSHOPS[action.payload.workshop];
    const library = yield select(Web3Domains.selectNetworkLibraryDomain);
    const workshopContract = new Contract(
      workshop.address,
      workshop.abi,
      library.getSigner()
    ) as Membership | AbominableSasquatchWorkshop;
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

export function* globalSaga() {
  yield takeEvery(GlobalActions.fetchNFTIds.type, fetchNFTIds);
}

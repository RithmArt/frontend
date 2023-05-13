import { AbominableSasquatchWorkshop } from "abi/abi-types";
import { BigNumber, utils } from "ethers";
import { toast } from "react-toastify";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { Web3Selectors } from "../BlockChain/Web3/selectors";
import { getWorkshopContract } from "../global/utils/getWorkshopContract";
import { shopActions } from "./slice";

function* startMintingNft(
  action: ReturnType<typeof shopActions.startMintingNft>
) {
  const { collectionId, workshop, amountToPay } = action.payload;
  yield put(shopActions.setIsMintingNft(true));
  try {
    const connectedAccount = yield select(Web3Selectors.selectAccount);
    if (connectedAccount) {
      const workshopContract: AbominableSasquatchWorkshop = yield call(
        getWorkshopContract,
        {
          ws: workshop,
        }
      );
      const res = yield call(
        workshopContract["mint(address,uint256)"],
        connectedAccount,
        BigNumber.from(collectionId),
        {
          // value in wei
          value: utils.parseEther(amountToPay.toString()),
        }
      );
      console.log(res);
    } else {
      toast.warning("connect your wallet first");
    }
  } catch (error) {
  } finally {
    yield put(shopActions.setIsMintingNft(false));
  }
}

export function* shopSaga() {
  yield takeLatest(shopActions.startMintingNft.type, startMintingNft);
}

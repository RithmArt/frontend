import { ShopState } from "./types";
import { createSlice } from "store/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../store/redux-injectors";
import { shopSaga } from "./saga";
import { PayloadAction } from "@reduxjs/toolkit";
import { Workshops } from "config";

const initialState: ShopState = {
  isMintingNft: false,
};
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    startMintingNft(
      state,
      action: PayloadAction<{
        collectionId: number;
        amountToPay: number;
        workshop: Workshops;
      }>
    ) {},
    setIsMintingNft(state, action: PayloadAction<boolean>) {
      state.isMintingNft = action.payload;
    },
  },
});

export const {
  actions: shopActions,
  reducer: shopReducer,
  name: sliceKey,
} = shopSlice;
export const useShopSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: shopReducer });
  useInjectSaga({ key: sliceKey, saga: shopSaga });
};

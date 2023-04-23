/**
 *
 * BlockChain
 *
 */

import React, { FC } from "react";
import { Ethers } from "./Ethers";
import { Web3 } from "./Web3";
import { useBlockChainSlice } from "./slice";
import { useWeb3Slice } from "./Web3/slice";

export const BlockChain: FC = () => {
  useBlockChainSlice();
  useWeb3Slice();
  return (
    <>
      <Web3 />
      <Ethers />
    </>
  );
};

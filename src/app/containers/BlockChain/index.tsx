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
import { Governance } from "./Governance";
import GOVERNANCE_ABI from "abi/governance.json";
import GovernanceTokenABI from "abi/sAxial.json";

export const BlockChain: FC = () => {
  useBlockChainSlice();
  useWeb3Slice();

  return (
    <>
      <Web3 />
      <Ethers />
      <Governance
        governanceABI={GOVERNANCE_ABI}
        tokenABI={GovernanceTokenABI}
      />
    </>
  );
};

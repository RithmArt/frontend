/**
 *
 * Web3
 *
 */

import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useWeb3Slice, Web3Actions } from "./slice";
import {
  createWeb3ReactRoot,
  useWeb3React,
  Web3ReactProvider,
} from "@web3-react/core";
import { BaseProvider } from "@ethersproject/providers";

import { Web3Provider } from "@ethersproject/providers";
import { NetworkContextName } from "../constants";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import Web3ReactManager from "./Web3ReactManager";
import { ethers } from "ethers";
import { rpcUrl } from "../utils/wallet/connectors";
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> & {} {
  const context = useWeb3React<Web3Provider>();
  const contextNetwork = useWeb3React<Web3Provider>(NetworkContextName);
  return context.active ? context : contextNetwork;
}

export const rpcProvider = new ethers.providers.StaticJsonRpcProvider(rpcUrl);

const Core = () => {
  useWeb3Slice();
  const dispatch = useDispatch();
  const { library: networkLibrary } = useActiveWeb3React();
  // console.log(library)
  const {
    active,
    activate,
    deactivate,
    account,
    connector,
    chainId,
    library,
    error,
  } = useWeb3React();

  useEffect(() => {
    dispatch(
      Web3Actions.setWeb3({
        active,
        activate,
        deactivate,
        account,
        connector,
        library,
        chainId,
        networkLibrary,
        error,
      })
    );
  }, [
    active,
    activate,
    deactivate,
    account,
    connector,
    library,
    chainId,
    error,
    dispatch,
  ]);

  return <></>;
};

let networkLibrary: BaseProvider | undefined;

export const Web3 = () => {
  const getNetworkLibrary = useCallback((): BaseProvider => {
    const provider = new ethers.providers.StaticJsonRpcProvider(rpcUrl);
    // @ts-ignore
    const library = (networkLibrary = networkLibrary ?? provider);
    // @ts-ignore
    return library;
  }, []);
  const getLibrary = useCallback((prvdr) => {
    const provider = new Web3Provider(prvdr);
    const library = provider;
    library.pollingInterval = 8000;
    return library;
  }, []);

  return (
    <Web3ReactProvider {...{ getLibrary }}>
      <Web3ProviderNetwork getLibrary={getNetworkLibrary}>
        <Web3ReactManager>
          <Core />
        </Web3ReactManager>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
};

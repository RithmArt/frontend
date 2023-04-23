import { ethers } from "ethers";

/* eslint-disable */
export enum AppPages {
  RootPage = "/",
  PlaygroundPage = "/playground",
  InProgressPage = "/in-progress",
  LastDrops = "/last-drops",
}

export enum NavigationRouteName {}
export type PrivateProvider = ethers.providers.StaticJsonRpcProvider;
export type Contract = ethers.Contract;

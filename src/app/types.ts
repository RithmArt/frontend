import { ethers } from "ethers";

/* eslint-disable */
export enum AppPages {
  RootPage = "/",
  PlaygroundPage = "/playground",
  InProgressPage = "/in-progress",
  LastDrops = "/last-drops",
  Workshops = "/workshops",
  Gallery = "/gallery",
}

export enum NavigationRouteName {}
export type PrivateProvider = ethers.providers.StaticJsonRpcProvider;
export type Contract = ethers.Contract;

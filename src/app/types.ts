import { ethers } from "ethers";

/* eslint-disable */
export enum AppPages {
  RootPage = "/",
  PlaygroundPage = "/playground",
  InProgressPage = "/in-progress",
  LastDrops = "/last-drops",
  Workshops = "/workshops",
  TreasuryGallery = "/treasury-gallery",
  Gallery = "/gallery",
  GovernancePage = "/governance",
}

export enum NavigationRouteName {}
export type skipLoading = true;
export type PrivateProvider = ethers.providers.StaticJsonRpcProvider;
export type Contract = ethers.Contract;

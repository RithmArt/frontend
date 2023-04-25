import { BigNumber } from "ethers";

export interface NFT {
  artist: string;
  id?: number;
  attributes: {
    trait_type: string;
    value: string;
  }[];
  description: string;
  external_url: string;
  image: string;
  name: string;
  platform: string;
}

export interface WorkshopInfo {
  invocations: BigNumber;
  maxInvocations: BigNumber;
  price: BigNumber;
  script: string;
  artist: string;
  artistPercentage: BigNumber;
}

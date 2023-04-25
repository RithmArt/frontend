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

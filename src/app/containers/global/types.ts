import { BigNumber } from "ethers";

export interface WorkshopInfo {
  invocations: BigNumber;
  maxInvocations: BigNumber;
  price: BigNumber;
  script: string;
  artist: string;
  artistPercentage: BigNumber;
}

interface MoralisMedia {
  height: number;
  url: string;
  width: number;
}
export interface MoralisNftResult {
  amount: string;
  block_number: string;
  block_number_minted: string;
  contract_type: string;
  last_metadata_sync: string;
  last_token_uri_sync: string;
  media: {
    mimetype: string;
    original_media_url: string;
    parent_hash: string;
    status: string;
    updatedAt: string;
    media_collection?: {
      high: MoralisMedia;
      low: MoralisMedia;
      medium: MoralisMedia;
    };
  };
  metadata: any;
  minter_address: string;
  name: string;
  owner_of: string;
  possible_spam: boolean;
  symbol: string;
  token_address: string;
  token_hash: string;
  token_id: string;
  token_uri: string;
  medResImageUrl?: string;
}

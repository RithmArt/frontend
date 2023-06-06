import { treasuryAddress } from "config";
import Moralis from "moralis";
import axios from "axios";
const nftAPI = Moralis.EvmApi.nft;
const web3ApiKey = process.env.REACT_APP_WEB3_API_KEY;
let moralisStarted = false;
export const startMoralis = async () => {
  if (!moralisStarted) {
    moralisStarted = true;
    await Moralis.start({
      apiKey: web3ApiKey,
    });
  }
};

export const getFormIpfs = async (link: string) => {
  let metadata;
  try {
    metadata = await axios.request({
      method: "GET",
      url: link,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return metadata;
  }
  return metadata.data;
};

const parseNftArray = (
  res:
    | Awaited<ReturnType<typeof nftAPI.getContractNFTs>>
    | Awaited<ReturnType<typeof nftAPI.getWalletNFTs>>
) => {
  const nftArray = res?.toJSON()?.result;
  if (nftArray) {
    nftArray.forEach((item) => {
      if (item.metadata) {
        item.metadata = JSON.parse(item.metadata);
      }
    });
    return nftArray
      .map((item) => {
        if (item.media) {
          return item;
        }
        return undefined;
      })
      .filter((item) => item !== undefined);
  }
  return nftArray;
};

export const getNFTsFromMoralis = async ({
  getBy,
  address,
}: {
  getBy: "walletAddress" | "contractAddress";
  address: string;
}) => {
  await startMoralis();
  let nftArray: any = [];
  if (getBy === "contractAddress") {
    const response = await nftAPI.getContractNFTs({
      chain: "0xa86a",
      format: "decimal",
      mediaItems: true,
      address,
    });
    nftArray = parseNftArray(response);
  } else if (getBy === "walletAddress") {
    const response = await nftAPI.getWalletNFTs({
      chain: "0xa86a",
      format: "decimal",
      mediaItems: true,
      address: treasuryAddress,
    });
    nftArray = parseNftArray(response);
  }
  return nftArray;
};

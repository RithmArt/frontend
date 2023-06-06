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

const parseNftArray = async (
  res:
    | Awaited<ReturnType<typeof nftAPI.getContractNFTs>>
    | Awaited<ReturnType<typeof nftAPI.getWalletNFTs>>
) => {
  const nftArray = res?.toJSON()?.result;
  let arrayToFix: any = [];
  if (nftArray) {
    nftArray.forEach((item) => {
      if (item.metadata) {
        item.metadata = JSON.parse(item.metadata);
        if (item.media.status === "invalid_url") {
          // console.log({item})
          arrayToFix.push(item);
        }
      }
    });
    const toCall: any = [];
    arrayToFix.forEach((item) => {
      if (item.token_uri) {
        toCall.push(
          fetch(
            item.token_uri.replace(
              "https://artists.bpi.network/nfts/",
              "/bpi_network/"
            )
          )
        );
      }
    });
    for (let i = 0; i < toCall.length; i++) {
      try {
        const response = await toCall[i];
        const data = await response.json();
        const fixedImage = data.image;
        if (data.image) {
          const obj = { url: fixedImage };
          arrayToFix[i].media = {
            sattus: "ok",
            media_collection: {
              high: obj,
              low: obj,
              thumbnail: obj,
              medium: obj,
            },
          };
        }
      } catch (error) {
        console.log({ error });
      }
    }

    return [
      ...nftArray
        .map((item) => {
          if (item.media) {
            return item;
          }
          return undefined;
        })
        .filter((item) => item !== undefined)
        .filter(
          (item) =>
            item.media.status !== "invalid_url" &&
            item.media.status !== "host_unavailable"
        ),
    ];
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

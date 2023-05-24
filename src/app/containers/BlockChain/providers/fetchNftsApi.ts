import { treasuryAddress } from "config";
import Moralis from "moralis";

const web3ApiKey =
  "qLXtH75VbGVFIlzGWSLgjzMMcIaQ6cZFozL84khRvEhkInBlJP98w57E8nUc0ZlV";

let moralisStarted = false;
const startMoralis = async () => {
  if (!moralisStarted) {
    moralisStarted = true;
    await Moralis.start({
      apiKey: web3ApiKey,
    });
  }
};

export const fetchTreasuryNFTsAPI = async () => {
  await startMoralis();
  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: "0xa86a",
    format: "decimal",
    mediaItems: true,
    address: treasuryAddress,
  });
  const results = response.toJSON().result;
  return results;
};

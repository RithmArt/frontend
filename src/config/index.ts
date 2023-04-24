import { env } from "environment";
import membershipABI from "abi/membershipABI.json";
import abominableSasquatchABI from "abi/abominable_sasquatch_workshop.json";

const IS_MAINNET = env.NETWORK === "mainnet";

const MAX_RETRIES = 5;

const WORKSHOPS = {
  membership: {
    address: "0xe0290c183e9F63A6f28938051443D9Ed47710073",
    abi: membershipABI,
  },
  abominablesasquatch: {
    address: "0x46C7D3AD69d82360047BdC4204891483610365cC",
    abi: abominableSasquatchABI,
  },
};

export { IS_MAINNET, WORKSHOPS, MAX_RETRIES };

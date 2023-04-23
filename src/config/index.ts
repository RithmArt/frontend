import { env } from "environment";

const IS_MAINNET = env.NETWORK === "mainnet";

const MAX_RETRIES = 5;

const CONTRACTS = {};

export { IS_MAINNET, CONTRACTS, MAX_RETRIES };

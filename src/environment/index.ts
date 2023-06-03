export const IS_DEV = process.env.NODE_ENV !== "production";

export const env = {
  APPNAME: process.env.REACT_APP_APPNAME,
  APIADDR: process.env.REACT_APP_APIADDR,
  DEVAPIADDR: process.env.REACT_APP_DEVAPIADDR,
  BASE_URL: process.env.REACT_APP_BASE_URL,
  IPFS_API_URL: process.env.REACT_APP_IPFS_API_URL,
  LOCALNODE: process.env.REACT_APP_LOCALNODE,
  NETWORK: process.env.REACT_APP_NETWORK,
  PRIVATENODE: process.env.REACT_APP_PRIVATENODE,
};

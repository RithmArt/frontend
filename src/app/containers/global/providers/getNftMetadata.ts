import { apiService } from "services/api";
import { RequestTypes } from "services/types";

export const fetchNFTMetadata = (url: string) => {
  const response = apiService.fetchData({
    isRawUrl: true,
    url,
    turnOffLogger: true,
    requestType: RequestTypes.GET,
    data: {},
  });
  return response;
};

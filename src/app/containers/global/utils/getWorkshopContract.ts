import { rpcProvider } from "app/containers/BlockChain/Web3";
import { Web3Domains } from "app/containers/BlockChain/Web3/selectors";
import { WorkshopContract, WORKSHOPS, Workshops } from "config";
import { Contract } from "ethers";
import { select } from "redux-saga/effects";

export function* getWorkshopContract({
  ws,
  useToGetData,
}: {
  ws: Workshops;
  useToGetData?: boolean;
}) {
  const workshop = WORKSHOPS[ws];
  const library = yield select(Web3Domains.selectNetworkLibraryDomain);
  const workshopContract = new Contract(
    workshop.address,
    workshop.abi,
    useToGetData ? rpcProvider : library.getSigner()
  ) as WorkshopContract;
  return workshopContract;
}

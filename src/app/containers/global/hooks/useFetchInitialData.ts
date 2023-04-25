import { Web3Selectors } from "app/containers/BlockChain/Web3/selectors";
import { Workshops, WORKSHOPS } from "config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalActions } from "../slice";

export const useFetchInitialData = () => {
  const dispatch = useDispatch();
  const library = useSelector(Web3Selectors.selectNetworkLibrary);
  useEffect(() => {
    if (library) {
      const workshops = Object.keys(WORKSHOPS);
      for (let i = 0; i < workshops.length; i++) {
        const workshop = workshops[i] as Workshops;
        dispatch(GlobalActions.fetchNFTIds({ workshop }));
        dispatch(GlobalActions.getWorkshopInfo({ workshop }));
      }
    }
    return () => {};
  }, [library]);
};

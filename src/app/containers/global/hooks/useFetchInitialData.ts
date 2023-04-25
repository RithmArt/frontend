import { Web3Selectors } from "app/containers/BlockChain/Web3/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalActions } from "../slice";

export const useFetchInitialData = () => {
  const dispatch = useDispatch();
  const library = useSelector(Web3Selectors.selectNetworkLibrary);
  useEffect(() => {
    if (library) {
      dispatch(GlobalActions.fetchNFTIds({ workshop: "abominablesasquatch" }));
      dispatch(GlobalActions.fetchNFTIds({ workshop: "membership" }));
    }
    return () => {};
  }, [library]);
};

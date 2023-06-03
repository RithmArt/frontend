import { NoProviderAlert } from "./noProvider";
import { ViewNftModal } from "./nftToShow";
import { WrongNetworkModalAlert } from "./wrongNetwork";

export const GlobalModals = () => {
  return (
    <>
      <WrongNetworkModalAlert />
      <NoProviderAlert />
      <ViewNftModal />
    </>
  );
};

import { NoProviderAlert } from "./noProvider";
import { TestModal } from "./test";
import { WrongNetworkModalAlert } from "./wrongNetwork";

export const GlobalModals = () => {
  return (
    <>
      <WrongNetworkModalAlert />
      <NoProviderAlert />
      <TestModal />
    </>
  );
};

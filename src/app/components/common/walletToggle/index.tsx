import React, { FC } from "react";
import { styled } from "@mui/material";
import { Web3Selectors } from "app/containers/BlockChain/Web3/selectors";
import { Web3Actions } from "app/containers/BlockChain/Web3/slice";
import { ConnectorPayload } from "app/containers/BlockChain/Web3/types";
// import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorageKeys, storage } from "../../../../store/storage";
import { ContainedButton } from "../buttons/containedButton";
import { OutlinedButton } from "../buttons/outlinedButton";
import { mobile } from "styles/media";

interface WalletToggleProps {
  fullWidth?: boolean;
}

export const WalletToggle: FC<WalletToggleProps> = ({ fullWidth }) => {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const isConnecting = useSelector(Web3Selectors.selectIsConnectingToWallet);
  const account = useSelector(Web3Selectors.selectAccount);

  const walletName: ConnectorPayload["walletName"] = "MetaMask";

  const handleButtonClick = () => {
    if (account) {
      dispatch(Web3Actions.disconnectFromWallet());
      storage.delete(LocalStorageKeys.CONNECTED_TO_WALLET_ONCE);
      return;
    }
    dispatch(Web3Actions.connectToWallet({ walletName }));
  };

  return account ? (
    <StyledOutlinedButton
      height={40.5}
      loading={isConnecting}
      onClick={handleButtonClick}
      fullWidth={fullWidth}
    >
      {account.substring(0, 5) +
        "..." +
        account.substring(account.length, account.length - 4)}
    </StyledOutlinedButton>
  ) : (
    <StyledContainedButton
      color="primary"
      height={40.5}
      loading={isConnecting}
      onClick={handleButtonClick}
      fullWidth={fullWidth}
    >
      {"connect to wallet"}
    </StyledContainedButton>
  );
};

const StyledContainedButton = styled(ContainedButton)({
  [mobile]: {
    marginLeft: "auto",
  },
});

const StyledOutlinedButton = styled(OutlinedButton)({
  [mobile]: {
    marginLeft: "auto",
  },
});

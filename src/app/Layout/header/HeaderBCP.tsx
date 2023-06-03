import React, { ReactElement } from "react";
import { styled } from "@mui/material";

import { WalletToggle } from "app/components/common/walletToggle";
import { mobile } from "styles/media";
import { useDeviceSize } from "hooks/mediaQuery";
import { AppIcon } from "assets/icons/appIcon";

export default function Header(): ReactElement {
  const { isMobile } = useDeviceSize();
  return (
    <StyledHeader>
      <AppIcon />
      {isMobile ? (
        <>
          <WalletToggle />
        </>
      ) : (
        <WalletToggle />
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled("header")(({ theme }) => ({
  height: 88,
  paddingLeft: 56,
  paddingRight: 56,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [mobile]: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    columnGap: 20,
  },
}));

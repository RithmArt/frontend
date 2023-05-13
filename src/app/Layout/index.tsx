import React, { ReactElement } from "react";
import { styled } from "@mui/material";

import { mobile } from "styles/media";
import Footer from "./footer/Footer";
import Header from "./header/Header";
// import { useDeviceSize } from "hooks/mediaQuery";
export const LayoutMaxWidth = 1400;
export default function Layout({
  children,
}: React.PropsWithChildren<unknown>): ReactElement {
  // const { isMobile } = useDeviceSize();
  return (
    <StyledLayout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: "#272626",
  [mobile]: {
    width: "100%",
    overflowX: "hidden",
  },
});

const HeaderWrapper = styled("div")({
  position: "fixed",
  width: "100%",
  zIndex: 99,
});

const MainWrapper = styled("div")(({ theme }) => ({
  marginTop: 100,
  marginBottom: 50,
  maxWidth: LayoutMaxWidth,
  width: "100%",
  margin: "100px auto 50px auto",
  minHeight: "90vh",
  [mobile]: {
    marginLeft: 0,
    padding: "0 5px",
  },
}));

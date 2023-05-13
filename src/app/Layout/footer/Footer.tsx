import React, { ReactElement } from "react";
import { Box, Container, Grid, styled } from "@mui/material";

import medusIcon from "./footerIcons/medusIcon.svg";
import bookIcon from "./footerIcons/bookIcon.svg";
import telegramIcon from "./footerIcons/telegramIcon.svg";
import twiterIcon from "./footerIcons/twiterIcon.svg";
import discordIcon from "./footerIcons/discordIcon.svg";
import logoBlack from "./footerIcons/logoBlack.svg";

import {
  mobile,
  mediaQuery282,
  mediaQuery377,
  mediaQuery825,
} from "styles/media";
import ListItems from "./components/footer/listItem";
import { Description } from "app/components/common/description";
import { CssVariables } from "styles/cssVariables/cssVariables";

const listTiltleFooter1 = "About";
const listTiltleFooter2 = "Drops";
const listItemsFooter1 = [
  { subHeading: "What is RITHM.Art?", link: "#" },
  { subHeading: "Team", link: "#" },
  { subHeading: "Contracts", link: "#" },
  { subHeading: "Docs", link: "#" },
];
const listItemsFooter2 = [
  { subHeading: "Last drops", link: "#" },
  { subHeading: "Gallery", link: "#" },
  { subHeading: "Collections", link: "#" },
];

export default function Footer(): ReactElement {
  return (
    <>
      <StyledContainer maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          <GridImgWrapper item xs={12} sm={12} md={4} lg={4} xl={5}>
            <WrapperImg>
              <IconImgBlack src={logoBlack} alt="logoBlack" />
            </WrapperImg>
            <Box>
              <StyledDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                volutpat sapien quam, tristique dignissim odio.
              </StyledDescription>
            </Box>
          </GridImgWrapper>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <ListItems heading={listTiltleFooter1} items={listItemsFooter1} />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <ListItems heading={listTiltleFooter2} items={listItemsFooter2} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            display="grid"
            alignItems="center"
            justifyContent="center"
          >
            <CustomBox mt="22px">
              <img src={twiterIcon} alt="twiterIcon" />
              <img src={discordIcon} alt="medusIcon" />
              <img src={telegramIcon} alt="telegramIcon" />
              <img src={medusIcon} alt="medusIcon" />
              <img src={bookIcon} alt="bookIcon" />
            </CustomBox>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <CopyRightWrapper>
              <p>© 2023 RITHM.ART</p>
            </CopyRightWrapper>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
}

const StyledDescription = styled(Description)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  ${mobile} {
    text-align: center;
    font-size: 16px;
  }

  @media (max-width: ${mediaQuery825}) {
    font-size: 13px;
  }
  @media (max-width: ${mediaQuery377}) {
    font-size: 12px;
  }
`;

const CustomBox = styled(Box)`
  img {
    margin-right: 10px;
  }
  @media (max-width: ${mediaQuery825}) {
    img {
      max-width: 26px;
    }
  }
  @media (max-width: ${mediaQuery282}) {
    img {
      max-width: 25px;
    }
  }
`;

const WrapperImg = styled("div")({
  [mobile]: {
    display: "flex",
    justifyContent: "center",
  },

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px",
  gap: "16px",
  width: "255px",
  height: "124px",
});

const CopyRightWrapper = styled("div")({
  fontStyle: "normal",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "26px",
  color: CssVariables.white,
  p: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "center",
    textTransform: "capitalize",
  },
});

const GridImgWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px",
  gap: "24px",
  [mobile]: {
    alignItems: "center",
  },
});

const StyledContainer = styled(Container)({
  marginTop: "100px",
});

const IconImgBlack = styled("img")`
  @media (max-width: ${mediaQuery825}) {
    max-width: 245px;
  }
  @media (max-width: ${mediaQuery282}) {
    max-width: 185px;
  }
`;

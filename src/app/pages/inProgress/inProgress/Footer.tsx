import React, { ReactElement, useState } from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";

import medusIcon from "./footerIcons/medusIcon.svg";
import bookIcon from "./footerIcons/bookIcon.svg";
import telegramIcon from "./footerIcons/telegramIcon.svg";
import twiterIcon from "./footerIcons/twiterIcon.svg";
import discordIcon from "./footerIcons/discordIcon.svg";
import logoBlack from "./footerIcons/logoBlack.svg";

import ListItems from "./components/footer/listItem";

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
      <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={12} md={4} lg={4} xl={5}>
            <WrapperImg>
              <img src={logoBlack} alt="" />
            </WrapperImg>
            <Box>
              <p style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                volutpat sapien quam, tristique dignissim odio.
              </p>
            </Box>
          </Grid>
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
            <CustomBox>
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
      </Container>
    </>
  );
}

const CustomBox = styled(Box)({
  img: { backgroundColor: "#000", marginRight: "10px" },
});

const WrapperImg = styled("div")({
  img: {
    width: "124px",
    height: "124px",
    display: "block",
    background: "#000",
  },
});

const CopyRightWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "26px",
  p: {
    fontSize: "14px",
  },
});

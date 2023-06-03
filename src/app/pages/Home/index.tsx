/**
 *
 * HomePage
 *
 */

import React from "react";
import { useInjectHomePageSlice } from "./slice";
import { Hero } from "./components/hero";
import { WorkshopIntroSection } from "./components/workshopIntroSection";
import { useSelector } from "react-redux";
import { globalSelectors } from "app/containers/global/selectors";
import { Workshops } from "config";
import { CenteredTitleAndDescription } from "app/components/common/titleDescriptionAction/centered";
import { TitleAndDescriptionWithIconOnTop } from "app/components/common/titleDescriptionAction/TitleAndDescriptionWithIconOnTop";
import { GroupedTitleAndDescriptionWithIconOnTop } from "app/components/common/titleDescriptionAction/TitleAndDescriptionWithIconOnTop/grouped";
import walletIcon from "assets/icons/walletIcon.svg";
import paperUploadIcon from "assets/icons/paperUpload.svg";
import bookmarkIcon from "assets/icons/bookmark.svg";
import { Container, Grid, styled } from "@mui/material";
import { LayoutMaxWidth } from "app/Layout";
import { VSpacer } from "app/components/common/vSpace";
import { NFTsSlider } from "./components/nftsSlider";

// import { useDispatch } from "react-redux";

export const HomePage = () => {
  useInjectHomePageSlice();
  const workshops = useSelector(globalSelectors.workshops);
  // const dispatch = useDispatch();
  return (
    <>
      <Hero />
      {Object.keys(workshops || []).map((workshop, index) => {
        const isOdd = index % 2 === 0;
        const ws = workshop as Workshops;
        if (isOdd) {
          return (
            <WorkshopIntroSection
              key={workshop}
              isReverse
              numberOfNfts={2}
              workshop={ws}
            />
          );
        }
        return <WorkshopIntroSection key={workshop} workshop={ws} />;
      })}
      <Container maxWidth="xl">
        <Grid container justifyContent="center" marginTop="200px">
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <CenteredTitleAndDescription
              title="Unlock a World of Algorithmic Art"
              description="With your membership, you'll gain access to a vibrant community of art enthusiasts, collectors, and creators, as well as the opportunity to shape the future of algorithmic art."
            />
          </Grid>
        </Grid>
        <GroupedTitleAndDescriptionWithIconOnTop>
          <Grid container spacing={5} my="35px">
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <TitleAndDescriptionWithIconOnTop
                title="Become a Curator"
                description="Acquire your exclusive Curatorship NFT - a one-of-a-kind, on-chain generative artwork from our inaugural Strokes Collection. This NFT will be your key to unlocking the Rithm Art Collective."
                iconSrc={walletIcon}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <TitleAndDescriptionWithIconOnTop
                title="Curate"
                description="Lead in the curation of our treasury. Support artist and collection intake as we contextualize algorithmic art."
                iconSrc={paperUploadIcon}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <TitleAndDescriptionWithIconOnTop
                title="Govern"
                description="Vote on governance proposals and help shape the RITHM ART Experience. Partipate in launchpad development and investment in vital tooling for the space."
                iconSrc={bookmarkIcon}
              />
            </Grid>
          </Grid>
        </GroupedTitleAndDescriptionWithIconOnTop>
      </Container>
      <VSpacer size={50} />
      <SliderWrapper>
        <AbsoluteWrapper>
          <Grid container justifyContent="center" my="35px">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <NFTsSlider numberOfNfts={20} />
            </Grid>
          </Grid>
        </AbsoluteWrapper>
      </SliderWrapper>
    </>
  );
};

const AbsoluteWrapper = styled("div")`
  position: absolute;
  top: 0;
  left: -${(window.innerWidth - LayoutMaxWidth) / 2}px;
  width: 100vw;
  height: 565px;
  display: flex;
`;

const SliderWrapper = styled("div")`
  height: 500px;
  position: relative;
`;

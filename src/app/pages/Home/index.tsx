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
import { styled } from "@mui/material";
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
      <CenteredTitleAndDescription
        title="How does it work?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sapien quam, tristique dignissim odio."
      />
      <GroupedTitleAndDescriptionWithIconOnTop>
        <TitleAndDescriptionWithIconOnTop
          title="Wallet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sapien quam, tristique dignissim odio."
          iconSrc={walletIcon}
        />
        <TitleAndDescriptionWithIconOnTop
          title="Create Collection"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sapien quam, tristique dignissim odio."
          iconSrc={paperUploadIcon}
        />
        <TitleAndDescriptionWithIconOnTop
          title="List them for sale"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sapien quam, tristique dignissim odio."
          iconSrc={bookmarkIcon}
        />
      </GroupedTitleAndDescriptionWithIconOnTop>
      <VSpacer size={50} />
      <SliderWrapper>
        <AbsoluteWrapper>
          <NFTsSlider numberOfNfts={20} />
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

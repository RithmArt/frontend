import { styled } from "@mui/material";
import { ContainedButton } from "app/components/common/buttons/containedButton";
import { Frame } from "app/components/common/frame";
import frameTest1 from "assets/images/frametest1.png";
import avatarplaceholder from "assets/images/avatarplaceholder.png";
import circularplaceholder from "assets/images/circularplaceholder.png";
import { OutlinedButton } from "app/components/common/buttons/outlinedButton";
import { TitleDescriptionAction } from "app/components/common/titleDescriptionAction";
import { Stacked } from "app/components/common/stacked";
import { Hero } from "../Home/components/hero";
import { CenteredTitleAndDescription } from "app/components/common/titleDescriptionAction/centered";
import { TitleAndDescriptionWithIconOnTop } from "app/components/common/titleDescriptionAction/TitleAndDescriptionWithIconOnTop";
import walletIcon from "assets/icons/walletIcon.svg";
import paperUploadIcon from "assets/icons/paperUpload.svg";
import bookmarkIcon from "assets/icons/bookmark.svg";
import { GroupedTitleAndDescriptionWithIconOnTop } from "app/components/common/titleDescriptionAction/TitleAndDescriptionWithIconOnTop/grouped";
import { VSpacer } from "app/components/common/vSpace";
import { CollectionInformationSection } from "app/components/common/collectionInformation";
import frameTest2 from "assets/images/frametest2.png";
import { MintSection } from "app/components/common/mintSection";
import { LayoutMaxWidth } from "app/Layout";
import { SwiperSlider } from "app/components/common/swiper";

export const PlaygroundPage = () => {
  return (
    <>
      <Hero />
      <ButtonsWrapper>
        <ContainedButton>test contained button</ContainedButton>
        <OutlinedButton>test outlined button</OutlinedButton>
      </ButtonsWrapper>
      <CenteredTitleAndDescription
        title="How does it work?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sapien quam, tristique dignissim odio."
      />
      <VSpacer size={75} />
      <CollectionInformationSection
        title="Evolved from ancestors"
        description="An artwork series exploring emergent natural phenomena uncovered by harnessing deeply nested fractal noise. A chaotic system where the hash of each token acts as a creative engine, generating a window into a foreign world."
        numberOfProperties="100+"
        price="2.5"
        size="100"
      />
      <VSpacer size={75} />
      <MintSection
        title="arq
      Mountains"
        licence="CC BY-NC-ND 4.0"
        collectionId="3000"
        floorPrice="2.5 AVAX"
        remaining="2"
        total="100"
        scriptType="webGL"
        previewImageSrc={frameTest2}
      />
      <VSpacer size={75} />

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
      <VSpacer size={75} />
      <FramesWrapper>
        <Frame src={frameTest1} />
        <Frame src={frameTest1} bgVariant="monocolor" />
        {/* here */}
        <Frame
          src={frameTest1}
          bottomInfo={{
            title: "test title",
            description: "test description",
          }}
        />
        <Frame src={frameTest1} />

        <Frame
          bgVariant="monocolor"
          src={frameTest1}
          bottomInfo={{
            title: "test title",
            description: "test description",
          }}
        />
        <Frame
          bgVariant="monocolor"
          src={frameTest1}
          bottomInfo={{
            startImageIconSrc: avatarplaceholder,
            title: "test title",
            description: "test description",
          }}
        />
        <Frame
          bgVariant="monocolor"
          src={frameTest1}
          bottomInfo={{
            title: "test title",
            description: "test description",
            endImageIconSrc: circularplaceholder,
            startImageIconSrc: avatarplaceholder,
          }}
        />
      </FramesWrapper>
      <TitleDescActionsWrapper>
        <TitleDescriptionAction
          title="Art for everyone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          actions={
            <ContainedButton onClick={() => console.log("test")}>
              test
            </ContainedButton>
          }
        />
        <TitleDescriptionAction
          title="Art for everyone"
          description="RITHM was soft launched in December 2022 to begin the establishment of the core infrastructure necessary for delivering on-chain generative art. This soft launch was established with the support of Jomari Peterson, Core Strategist for the Snowball Ecosystem, and Abominable Sasquatch as the debut artist.                      "
          textAlign="right"
          reverse
          actions={
            <>
              <ContainedButton onClick={() => console.log("test")}>
                test
              </ContainedButton>
              <OutlinedButton onClick={() => console.log("test")}>
                test
              </OutlinedButton>
            </>
          }
        />
        <TitleDescriptionAction
          title="Art for everyone"
          description="RITHM was soft launched in December 2022 to begin the establishment of the core infrastructure necessary for delivering on-chain generative art. This soft launch was established with the support of Jomari Peterson, Core Strategist for the Snowball Ecosystem, and Abominable Sasquatch as the debut artist.                      "
          actions={
            <>
              <ContainedButton onClick={() => console.log("test")}>
                test
              </ContainedButton>
              <OutlinedButton onClick={() => console.log("test")}>
                test
              </OutlinedButton>
            </>
          }
        />
        <TitleDescriptionAction
          title="Art for everyone"
          reverse
          textAlign="right"
          description="RITHM was soft launched in December 2022 to begin the establishment of the core infrastructure necessary for delivering on-chain generative art. This soft launch was established with the support of Jomari Peterson, Core Strategist for the Snowball Ecosystem, and Abominable Sasquatch as the debut artist.                      "
          otherSection={
            <Stacked
              height={600}
              elements={[
                <Frame
                  bgVariant="monocolor"
                  src={frameTest1}
                  bottomInfo={{
                    title: "test title",
                    description: "test description",
                    endImageIconSrc: circularplaceholder,
                    startImageIconSrc: avatarplaceholder,
                  }}
                />,
                <Frame
                  bgVariant="monocolor"
                  src={frameTest1}
                  bottomInfo={{
                    title: "test title",
                    description: "test description",
                    endImageIconSrc: circularplaceholder,
                    startImageIconSrc: avatarplaceholder,
                  }}
                />,
              ]}
            />
          }
        />
        <TitleDescriptionAction
          title="Art for everyone"
          description="RITHM was soft launched in December 2022 to begin the establishment of the core infrastructure necessary for delivering on-chain generative art. This soft launch was established with the support of Jomari Peterson, Core Strategist for the Snowball Ecosystem, and Abominable Sasquatch as the debut artist.                      "
          otherSection={
            <Frame
              bgVariant="monocolor"
              src={frameTest1}
              bottomInfo={{
                title: "test title",
                description: "test description",
                endImageIconSrc: circularplaceholder,
                startImageIconSrc: avatarplaceholder,
              }}
            />
          }
        />
      </TitleDescActionsWrapper>
      <CenteredTitleAndDescription
        title="World-Renowned
        Artist"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sapien quam, tristique dignissim odio."
      />
      <VSpacer size={50} />
      <SliderWrapper>
        <AbsoluteWrapper>
          <SwiperSlider
            items={[
              <Frame
                src={frameTest1}
                bottomInfo={{
                  title: "test title",
                  description: "test description",
                }}
              />,
              <Frame
                src={frameTest1}
                bottomInfo={{
                  title: "test title",
                  description: "test description",
                }}
              />,
              <Frame
                src={frameTest1}
                bottomInfo={{
                  title: "test title",
                  description: "test description",
                }}
              />,
            ]}
          />
        </AbsoluteWrapper>
      </SliderWrapper>
    </>
  );
};

const SliderWrapper = styled("div")`
  height: 500px;
  position: relative;
`;
const AbsoluteWrapper = styled("div")`
  position: absolute;
  top: 0;
  left: -${(window.innerWidth - LayoutMaxWidth) / 2}px;
  width: 100vw;
  height: 565px;
  display: flex;
`;

const FramesWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ButtonsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const TitleDescActionsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

import { styled } from "@mui/material";
import { ContainedButton } from "app/components/common/buttons/containedButton";
import { Frame } from "app/components/common/frame";
import { TitleDescriptionAction } from "app/components/common/titleDescriptionAction";
import louis from "./assets/louis.png";
import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import hero3 from "./assets/hero3.png";
import { ThreeImages } from "app/components/common/threeImages";
import { VSpacer } from "app/components/common/vSpace";
import { Stacked } from "app/components/common/stacked";
import frametest1 from "./assets/frametest1.png";
import frametest2 from "./assets/frametest2.png";
import { CollectionInformationSection } from "app/components/common/collectionInformation";
import { MintSection } from "app/components/common/mintSection";

export const LastDropsPage = () => {
  return (
    <Wrapper>
      <TitleDescriptionAction
        top={<>0xluis_</>}
        title="arq Mountains"
        description="Short descripcion about the drop"
        actions={
          <>
            <ContainedButton>Mint</ContainedButton>
          </>
        }
        otherSection={
          <ThreeImages image1={hero1} image2={hero2} image3={hero3} />
        }
      />
      <VSpacer size={170} />
      <TitleDescriptionAction
        title="0xluis_"
        description={[
          "0xluis_ is a generative artist oscillating between Paris and Madrid. He graduated with a software engineering and machine learning degree and was always drawn to generative art in the past few years. It was only after graduating that he started to get out of his comfort zone and started creating art.",
          "His work is for now shaped by simple primitives, contrasted colours and various distortions applied with shaders. His favourite quote is: It's always day one",
        ]}
        actions={
          <>
            <ContainedButton>Mint</ContainedButton>
          </>
        }
        otherSection={
          <Frame
            src={louis}
            bgVariant="monocolor"
            bottomInfo={{
              title: "0xluis_",
              description: "@collector_name",
            }}
          />
        }
      />
      <VSpacer size={170} />

      <TitleDescriptionAction
        title="Inspiration behind the collection"
        description="The collection captures an iterative sequence of apocalyptic scenarios which drift through the void of obliviousness. A future for which we won't be here, conformed by a present engulfed by sediments of time. A time that will shift what was once below with what was once above ( earth-civilization ), asserting fate's victory."
        reverse
        textAlign="right"
        otherSection={
          <Stacked
            height={500}
            elements={[
              <Frame
                bgVariant="monocolor"
                src={frametest1}
                bottomInfo={{
                  title: "#51",
                  description: "@collection_name",
                }}
              />,
              <Frame
                bgVariant="monocolor"
                src={frametest2}
                bottomInfo={{
                  title: "#52",
                  description: "@collection_name",
                }}
              />,
            ]}
          />
        }
      />
      <VSpacer size={170} />
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
        previewImageSrc={frametest2}
      />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  width: 100%;
`;

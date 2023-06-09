import { styled, Grid } from "@mui/material";
import { ContainedButton } from "app/components/common/buttons/containedButton";
import { Frame } from "app/components/common/frame";
import { TitleDescriptionAction } from "app/components/common/titleDescriptionAction";
import { ThreeImages } from "app/components/common/threeImages";
import { VSpacer } from "app/components/common/vSpace";
import { Stacked } from "app/components/common/stacked";
import { CollectionInformationSection } from "app/components/common/collectionInformation";
import { MintSection } from "app/components/common/mintSection";
import { VideoPlayer } from "../inProgress/VideoPlayer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { globalSelectors } from "app/containers/global/selectors";
import { Workshops } from "config";
import { getMultipleRandom } from "app/containers/utils/getMultipleRandom";
import { PageLoading } from "app/components/common/pageLoading";
import { utils } from "ethers";
import { history } from "router/history";
import { AppPages } from "app/types";

export const WorkshopPage = () => {
  const params = useParams<{ workshop: Workshops }>();
  const { workshop = "membership" } = params;
  const workshops = useSelector(globalSelectors.workshops);

  const workshopData = workshops[workshop];
  const nfts = workshopData.nfts || [];
  const threeRandomNfts = getMultipleRandom(nfts, 3);
  const workshopInfo = useSelector(globalSelectors.workshopInfos(workshop));
  const scrollToMintContainer = () => {
    const mintButton = document.getElementById("mintButton");
    if (mintButton) {
      mintButton.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!workshops) {
    return <>not found</>;
  }
  if (!workshopInfo) {
    return <PageLoading />;
  }
  if (window?.location?.hash === "#mint") {
    setTimeout(() => {
      scrollToMintContainer();
    }, 1000);
  }
  const collectionInfo = workshopInfo[0];
  const total = Number(collectionInfo.maxInvocations);
  const floorPrice = Number(collectionInfo.price).toString();
  const floorPrice_in_AVAX = utils.formatEther(floorPrice);

  const handleViewGalleryClick = () => {
    history.push(`${AppPages.Gallery}/${workshop}`);
  };
  return (
    <Wrapper>
      <Grid container spacing={{ lg: 8, xl: 8 }} alignItems={"center"}>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <TitleDescriptionAction
            top={<>{workshopData.creatorInfo.name}</>}
            title={workshopData.info.name}
            description={workshopData.info.descriptions}
            actions={
              <>
                <ContainedButton onClick={handleViewGalleryClick}>
                  View gallery
                </ContainedButton>
              </>
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={7}
          xl={7}
          display={{ xs: "none", lg: "flex" }}
        >
          <ThreeImages
            image1={threeRandomNfts[0]?.media?.original_media_url}
            image2={threeRandomNfts[1]?.media?.original_media_url}
            image3={threeRandomNfts[2]?.media?.original_media_url}
          />
        </Grid>
      </Grid>
      <VSpacer size={170} />
      <TitleDescriptionAction
        title={workshopData.creatorInfo.name}
        description={workshopData.creatorInfo.descriptions}
        actions={
          <>
            <ContainedButton onClick={scrollToMintContainer}>
              Mint
            </ContainedButton>
          </>
        }
        otherSection={
          <Frame
            src={workshopData.creatorInfo.image}
            bgVariant="monocolor"
            bottomInfo={{
              title: workshopData.creatorInfo.name,
              description: workshopData.info.name,
            }}
          />
        }
      />
      <VSpacer size={170} />

      <TitleDescriptionAction
        title="Inspiration behind the collection"
        description={workshopData.info.inspiration}
        reverse
        textAlign="right"
        otherSection={
          <Stacked
            height={500}
            elements={[
              <Frame
                bgVariant="monocolor"
                height={450}
                src={nfts[0]?.media?.original_media_url}
                bottomInfo={{
                  title: "#" + (nfts[0]?.token_id || ""),
                  description: workshopData.info.name || "",
                }}
              />,
              <Frame
                bgVariant="monocolor"
                height={450}
                src={nfts[1]?.media?.original_media_url}
                bottomInfo={{
                  title: "#" + (nfts[1]?.token_id || ""),
                  description: workshopData.info.name || "",
                }}
              />,
            ]}
          />
        }
      />
      <VSpacer size={170} />
      <MintSection workshop={workshop} licence="MIT" scriptType="P5.js" />
      <VSpacer size={150} />
      <CollectionInformationSection
        title={workshopData.info.name}
        description={workshopData.info.descriptions}
        numberOfProperties="100+"
        price={floorPrice_in_AVAX}
        size={total.toString()}
      />
      <VSpacer size={170} />
      {workshopData.introVideoLink && (
        <VideoPlayer link={workshopData.introVideoLink} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  width: 100%;
`;

import { Container, Grid, styled } from "@mui/material";
import { SnowSelect } from "app/components/base/SnowSelect";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { ContainedButton } from "../buttons/containedButton";
import { Frame } from "../frame";
import { Title } from "../title";
import { TitleValue } from "../TitleValue";
import { VSpacer } from "../vSpace";
import { mediaQuery1024, mediaQuery282, mediaQuery377 } from "styles/media";
import { NeedsWalletConnection } from "../needsWalletConnection";
import { WalletToggle } from "../walletToggle";
import { WORKSHOPS } from "config";
import { useDispatch, useSelector } from "react-redux";
import { globalSelectors } from "app/containers/global/selectors";
import { PageLoading } from "../pageLoading";
import { subtract } from "precise-math";
import { utils } from "ethers";
import { shopSelectors } from "app/containers/shop/selector";
import { shopActions } from "app/containers/shop/slice";

interface MintSectionProps {
  licence: string;
  scriptType: string;
  workshop: keyof typeof WORKSHOPS;
}

export const MintSection = ({
  licence,
  scriptType,
  workshop,
}: MintSectionProps) => {
  const dispatch = useDispatch();
  const handleMintClick = (floorPriceInAVAX: string) => {
    dispatch(
      shopActions.startMintingNft({
        collectionId: 1,
        workshop,
        amountToPay: Number(floorPriceInAVAX),
      })
    );
  };
  const randomNftsFromWorkshop =
    useSelector(globalSelectors.randomNfts(workshop)) || [];
  const isMinting = useSelector(shopSelectors.isMintingNft);
  const nftInfo = randomNftsFromWorkshop[0] || undefined;
  const workshopInfo = useSelector(globalSelectors.workshopInfos(workshop));

  if (!workshopInfo) {
    return <PageLoading />;
  }

  const collectionInfo = workshopInfo[0];
  const total = Number(collectionInfo.maxInvocations);
  const remaining = subtract(total, Number(collectionInfo.invocations));
  const floorPrice = Number(collectionInfo.price).toString();
  const floorPrice_in_AVAX = utils.formatEther(floorPrice);
  // const formatedFloorPrice=formatCurrencyCell()
  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <ImagePreviewWrapper>
              <InfoWrapper>
                {nftInfo && (
                  <Frame
                    height={450}
                    width={350}
                    bgVariant="monocolor"
                    src={nftInfo.media.original_media_url}
                  />
                )}
                <span style={{ color: "#e13434" }}>
                  * Random art from this workshop
                </span>
              </InfoWrapper>
            </ImagePreviewWrapper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} justifyContent="center" alignItems="center">
            <InfoWrapper id="mintButton">
            <DataInfoWrapper>
              <StyledTitle>{nftInfo?.name}</StyledTitle>
              <VSpacer size={5} />
              
                <TitleValue title="Licence" value={licence} />
                <TitleValue title="Collection ID" value={"0"} />
                <TitleValue title="Script Type" value={scriptType} />
                <TitleValue title="Remaining" value={remaining + " / " + total} />
                <TitleValue
                  title="Floor Price"
                  value={`${floorPrice_in_AVAX} AVAX`}
                />
              
              <NeedsWalletConnection
                disConnected={<WalletToggle />}
                connected={
                  <>
                    <ActionsWrapper>
                      <SnowSelect
                        style={{ width: "50%" }}
                        onChange={() => { }}
                        options={[
                          { label: "Public Mint", value: "PublicMint" },
                          // { label: "Private Mint", value: "PrivateMint" },
                        ]}
                        value="PublicMint"
                        selectedValue={"PublicMint"}
                      />
                      <ContainedButton
                        style={{ width: "50%", minHeight: "45px" }}
                        loading={isMinting}
                        onClick={() => handleMintClick(floorPrice_in_AVAX)}
                      >
                        Mint
                      </ContainedButton>
                    </ActionsWrapper>
                  </>
                }
              ></NeedsWalletConnection>
              </DataInfoWrapper>
            </InfoWrapper>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

const ActionsWrapper = styled("div")`
  display: flex;
  gap: 30px;
  @media (max-width: ${mediaQuery282}) {
    flex-direction: column;
  }
`;

const ImagePreviewWrapper = styled("div")`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  @media (max-width: ${mediaQuery1024}) {
    display: flex;
    justify-content: center;
    margin-bottom: 130px;
    flex-direction: column;
    align-items: center;
  }
`;

const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  @media (max-width: ${mediaQuery1024}) {
    text-align: center;
  }
`;

const DataInfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 460px;
  @media (max-width: ${mediaQuery1024}) {
    text-align: center;
  }
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${CssVariables.white};
`;

const StyledTitle = styled(Title)`
  font-size: 42px;
  line-height: 40px;
  @media (max-width: ${mediaQuery377}) {
    font-size: 43px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 40px;
  }
`;

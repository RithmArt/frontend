import { Container, Grid, styled } from "@mui/material";
import { SnowSelect } from "app/components/base/SnowSelect";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { ContainedButton } from "../buttons/containedButton";
import { Frame } from "../frame";
import { Title } from "../title";
import { TitleValue } from "../TitleValue";
import { VSpacer } from "../vSpace";
import { mediaQuery1024, mediaQuery282, mediaQuery377 } from "styles/media";

interface MintSectionProps {
  title: string;
  licence: string;
  collectionId: string;
  scriptType: string;
  remaining: string;
  total: string;
  floorPrice: string;
  previewImageSrc: string;
}

export const MintSection = (props: MintSectionProps) => {
  const {
    title,
    licence,
    collectionId,
    scriptType,
    remaining,
    total,
    floorPrice,
    previewImageSrc,
  } = props;

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
            <ImagePreviewWrapper>
              <Frame bgVariant="monocolor" src={previewImageSrc} />
            </ImagePreviewWrapper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
            <InfoWrapper>
              <StyledTitle>{title}</StyledTitle>
              <VSpacer size={50} />
              <TitleValue title="Licence" value={licence} />
              <TitleValue title="Collection ID" value={collectionId} />

              <TitleValue title="Script Type" value={scriptType} />
              <TitleValue title="Remaining" value={remaining + " / " + total} />
              <TitleValue title="Floor Price" value={floorPrice} />
              <ActionsWrapper>
                <SnowSelect
                  onChange={() => {}}
                  options={[
                    { label: "Public Mint", value: "PublicMint" },
                    { label: "Private Mint", value: "PrivateMint" },
                  ]}
                  value="PublicMint"
                  selectedValue={"PublicMint"}
                />
                <ContainedButton>Mint</ContainedButton>
              </ActionsWrapper>
            </InfoWrapper>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

const ActionsWrapper = styled("div")`
  display: flex;
  gap: 10px;
  @media (max-width: ${mediaQuery282}) {
    flex-direction: column;
  }
`;

const ImagePreviewWrapper = styled("div")`
  @media (max-width: ${mediaQuery1024}) {
    display: flex;
    justify-content: center;
    margin-bottom: 130px;
  }
`;

const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  font-size: 45px;

  @media (max-width: ${mediaQuery377}) {
    font-size: 43px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 40px;
  }
`;

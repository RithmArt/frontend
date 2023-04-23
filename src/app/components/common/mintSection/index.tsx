import { styled } from "@mui/material";
import { SnowSelect } from "app/components/base/SnowSelect";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { ContainedButton } from "../buttons/containedButton";
import { Frame } from "../frame";
import { Title } from "../title";
import { TitleValue } from "../TitleValue";
import { VSpacer } from "../vSpace";

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
      <ImagePreviewWrapper>
        <Frame bgVariant="monocolor" src={previewImageSrc} />
      </ImagePreviewWrapper>
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
    </Wrapper>
  );
};

const ActionsWrapper = styled("div")`
  display: flex;
  gap: 10px;
`;

const ImagePreviewWrapper = styled("div")``;

const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
`;

import { styled } from "@mui/material";
import { Description } from "../description";
import { Title } from "../title";

interface CollectionInformationSectionProps {
  size: string;
  title: string;
  description: string;
  numberOfProperties: string;
  price: string;
}

interface BoldTitleAndDescriptionProps {
  title: string;
  description: string;
}

const BoldTitleAndDescription = (props: BoldTitleAndDescriptionProps) => {
  const { title, description } = props;
  return (
    <InfoWrapper>
      <StyledTitle style={{ fontSize: "36px", fontWeight: "900" }}>
        {title}
      </StyledTitle>
      <StyledDescription style={{ fontSize: "16px" }}>
        {description}
      </StyledDescription>
    </InfoWrapper>
  );
};

export const CollectionInformationSection = (
  props: CollectionInformationSectionProps
) => {
  const { size, title, description, numberOfProperties, price } = props;
  return (
    <Wrapper>
      <TextSectionWrapper>
        <StyledDescription>Collection Information</StyledDescription>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </TextSectionWrapper>
      <InfosWrapper>
        <BoldTitleAndDescription title={size} description="size" />
        <BoldTitleAndDescription
          title={price + " AVAX"}
          description="floor price"
        />
        <BoldTitleAndDescription
          title={numberOfProperties}
          description="Different properties"
        />
      </InfosWrapper>
    </Wrapper>
  );
};

const InfosWrapper = styled("div")`
  width: 580px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSectionWrapper = styled("div")`
  max-width: 580px;
`;

const StyledTitle = styled(Title)`
  font-size: 45px;
`;
const StyledDescription = styled(Description)`
  font-size: 20px;
`;

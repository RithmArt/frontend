import { Container, Grid, styled } from "@mui/material";
import { Description } from "../description";
import { Title } from "../title";
import {
  mediaQuery1024,
  mediaQuery282,
  mediaQuery377,
  mediaQuery395,
  mediaQuery417,
  mediaQuery825,
  mediaQuery914,
} from "styles/media";

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
      <StyledTitleBold>{title}</StyledTitleBold>
      <StyledDescriptionBold>{description}</StyledDescriptionBold>
    </InfoWrapper>
  );
};

export const CollectionInformationSection = (
  props: CollectionInformationSectionProps
) => {
  const { size, title, description, numberOfProperties, price } = props;
  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between">
          <GridTextSection item xs={12} sm={12} md={12} lg={5} xl={5}>
            <TextSectionWrapper>
              <StyledDescription>Collection Information</StyledDescription>
              <StyledTitle>{title}</StyledTitle>
              <StyledDescription>{description}</StyledDescription>
            </TextSectionWrapper>
          </GridTextSection>
          <StyledGridInfoInfos item xs={12} sm={12} md={12} lg={5} xl={5}>
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
          </StyledGridInfoInfos>
        </Grid>
      </Container>
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
  @media (max-width: ${mediaQuery1024}) {
    text-align: center;
  }
`;

const StyledTitle = styled(Title)`
  font-size: 45px;
  @media (max-width: ${mediaQuery914}) {
    font-size: 40px;
  }

  @media (max-width: ${mediaQuery417}) {
    font-size: 40px;
  }
  @media (max-width: ${mediaQuery377}) {
    font-size: 37px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 35px;
  }
`;
const StyledDescription = styled(Description)`
  font-size: 20px;

  @media (max-width: ${mediaQuery914}) {
    font-size: 16px;
  }
  @media (max-width: ${mediaQuery417}) {
    font-size: 17px;
  }
  @media (max-width: ${mediaQuery395}) {
    font-size: 16px;
  }
  @media (max-width: ${mediaQuery377}) {
    font-size: 13px;
  }
`;

const StyledGridInfoInfos = styled(Grid)`
  @media (max-width: ${mediaQuery1024}) {
    display: flex;
    justify-content: center;
    margin-top: 90px;
  }
`;

const StyledTitleBold = styled(Title)`
  font-size: 36px;
  font-weight: 900;
  @media (max-width: ${mediaQuery914}) {
    font-size: 33px;
  }
  @media (max-width: ${mediaQuery825}) {
    font-size: 32px;
  }
  @media (max-width: ${mediaQuery417}) {
    font-size: 34px;
  }
  @media (max-width: ${mediaQuery395}) {
    font-size: 30px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 28px;
  }
`;

const StyledDescriptionBold = styled(Description)`
  font-size: 16px;
  @media (max-width: ${mediaQuery914}) {
    font-size: 14px;
  }
  @media (max-width: ${mediaQuery825}) {
    font-size: 17px;
  }
  @media (max-width: ${mediaQuery395}) {
    font-size: 15px;
  }
  @media (max-width: ${mediaQuery377}) {
    font-size: 13px;
  }
`;

const GridTextSection = styled(Grid)`
  @media (max-width: ${mediaQuery1024}) {
    display: flex;
    justify-content: center;
  }
`;

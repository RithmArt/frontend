import { styled, Grid, Container } from "@mui/material";

import { ContainedButton } from "app/components/common/buttons/containedButton";
import { OutlinedButton } from "app/components/common/buttons/outlinedButton";
import { ThreeImages } from "app/components/common/threeImages";
import { AppPages } from "app/types";
import { history } from "router/history";
import { CssVariables } from "styles/cssVariables/cssVariables";
import {
  mediaQuery545,
  mediaQuery417,
  mediaQuery395,
  mediaQuery377,
  mediaQuery282,
  mediaQuery825,
} from "styles/media";
import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import hero3 from "./assets/hero3.png";

export const Hero = () => {
  const handleBecomeAnArtistClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSc3tDhf8fQIvLLS0hfBGbrDijq84iH90uFJBvRo8L-necHAcQ/viewform?usp=sf_link",
      "_blank"
    );
  };
  const handleJoinClick = () => {
    history.push(`${AppPages.Workshops}/membership#mint`);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ lg: 8, xl: 8 }}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <TitleDescActionsWrapper>
            <TitleAndDescWrapper>
              <Title>RITHM Art Collective</Title>
              <Description>
                The 1st Algorithmic Art Collective built on the Avalanche
                network to support the development, curation and adoption of
                Generative, Computational and AI art
              </Description>
            </TitleAndDescWrapper>
            <ActionsWrapper>
              <ExtendedContainedButton onClick={handleJoinClick}>
                Join
              </ExtendedContainedButton>
              <ExtendedOutlinedButton onClick={handleBecomeAnArtistClick}>
                Become an artist
              </ExtendedOutlinedButton>
            </ActionsWrapper>
          </TitleDescActionsWrapper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={8}
          display={{ xs: "none", lg: "flex" }}
        >
          <ThreeImages image1={hero1} image2={hero2} image3={hero3} />
        </Grid>
      </Grid>
    </Container>
  );
};

const TitleDescActionsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const ActionsWrapper = styled("div")`
  display: flex;
  gap: 10px;
  @media (max-width: ${mediaQuery282}) {
    flex-direction: column;
  }
`;
const Title = styled("h3")`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 65px;
  color: ${CssVariables.white};
  @media (max-width: ${mediaQuery825}) {
    font-size: 63px;
  }
  @media (max-width: ${mediaQuery545}) {
    font-size: 50px;
  }
  @media (max-width: ${mediaQuery417}) {
    font-size: 58px;
  }
  @media (max-width: ${mediaQuery395}) {
    font-size: 54px;
  }
  @media (max-width: ${mediaQuery377}) {
    font-size: 33px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 37px;
  }
`;

const Description = styled("p")`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  color: ${CssVariables.white};
  @media (max-width: ${mediaQuery825}) {
    font-size: 17px;
  }
  @media (max-width: ${mediaQuery545}) {
    margin-top: 7px;
    font-size: 16px;
  }

  @media (max-width: ${mediaQuery377}) {
    margin-top: 7px;
    font-size: 15px;
  }
  @media (max-width: ${mediaQuery282}) {
    margin-top: 7px;
    font-size: 12px;
  }
`;

const ExtendedOutlinedButton = styled(OutlinedButton)`
  @media (max-width: ${mediaQuery825}) {
    font-size: 14px;
  }

  @media (max-width: ${mediaQuery395}) {
    font-size: 11px;
  }
`;

const ExtendedContainedButton = styled(ContainedButton)`
  @media (max-width: ${mediaQuery377}) {
    font-size: 14px;
  } ;
`;

const TitleAndDescWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

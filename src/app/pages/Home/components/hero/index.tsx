import { styled } from "@mui/material";
import { ContainedButton } from "app/components/common/buttons/containedButton";
import { OutlinedButton } from "app/components/common/buttons/outlinedButton";
import { ThreeImages } from "app/components/common/threeImages";
import { CssVariables } from "styles/cssVariables/cssVariables";
import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import hero3 from "./assets/hero3.png";

export const Hero = () => {
  return (
    <Wrapper>
      <TitleDescActionsWrapper>
        <TitleAndDescWrapper>
          <Title>
            Algorithm Art platform for
            <b>Artists</b>.
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque
            obcaecati amet, laudantium nulla sapiente corrupti rerum! Et nostrum
            harum expedita sequi laudantium iste! Atque et repellendus, eveniet
            voluptas earum quidem, natus error sequi consequuntur, sit ex?
            Dolores, rerum laudantium repellat nulla nesciunt voluptatibus sint
            voluptate ex blanditiis. Accusantium et sunt facere eos similique
            odit itaque natus, repellat aut. Ut minima amet, nemo nam in aut
            pariatur voluptas odit at!
          </Description>
        </TitleAndDescWrapper>
        <ActionsWrapper>
          <ContainedButton>Galery Art</ContainedButton>
          <OutlinedButton>Become an artist </OutlinedButton>
        </ActionsWrapper>
      </TitleDescActionsWrapper>
      <ThreeImages image1={hero1} image2={hero2} image3={hero3} />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
`;

const TitleDescActionsWrapper = styled("div")``;
const ActionsWrapper = styled("div")`
  display: flex;
  gap: 10px;
`;
const Title = styled("h3")`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 65px;
  color: ${CssVariables.white};
`;

const Description = styled("p")`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  color: ${CssVariables.white};
`;
const TitleAndDescWrapper = styled("div")``;

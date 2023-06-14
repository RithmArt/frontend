import { styled } from "@mui/material";
import Fade from "react-reveal/Fade";

interface ThreeImagesProps {
  image1: string;
  image2: string;
  image3: string;
}
export const ThreeImages = (props: ThreeImagesProps) => {
  const { image1, image2, image3 } = props;
  return (
    <ImegesWrapper>
      <Fade delay={50}>
        <Hero1 src={image1} />
      </Fade>
      <Hero2AndHero3Wrappe>
       <Fade delay={200}>
          <Hero2 src={image2} />
        </Fade>
        <Fade delay={30}>
          <Hero3 src={image3} />
        </Fade>
      </Hero2AndHero3Wrappe>
    </ImegesWrapper>
  );
};

const Hero1 = styled("img")`
  width: 323px;
  object-fit: cover;
  border: 2px solid black;
  height: 460px;
  transition: .5s;
  &:hover{
    transform: scale(1.05);
  }
`;
const Hero2 = styled("img")`
  width: 572px;
  object-fit: cover;
  border: 2px solid black;
  height: 410px;
  transition: .5s;
  &:hover{
    transform: scale(1.05);
  }
`;
const Hero3 = styled("img")`
  object-fit: cover;
  border: 2px solid black;
  width: 270px;
  height: 270px;
  transition: .5s;
  &:hover{
    transform: scale(1.05);
  }
`;

const ImegesWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 15px;
`;

const Hero2AndHero3Wrappe = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 572px;
  height: 693px;
`;

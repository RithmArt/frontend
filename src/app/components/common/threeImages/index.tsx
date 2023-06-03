import { styled } from "@mui/material";

interface ThreeImagesProps {
  image1: string;
  image2: string;
  image3: string;
}
export const ThreeImages = (props: ThreeImagesProps) => {
  const { image1, image2, image3 } = props;
  return (
    <ImegesWrapper>
      <Hero1 src={image1} />
      <Hero2AndHero3Wrappe>
        <Hero2 src={image2} />
        <Hero3 src={image3} />
      </Hero2AndHero3Wrappe>
    </ImegesWrapper>
  );
};

const Hero1 = styled("img")`
  width: 323px;
  object-fit: cover;
  border: 2px solid black;
  height: 460px;
`;
const Hero2 = styled("img")`
  width: 572px;
  object-fit: cover;
  border: 2px solid black;
  height: 410px;
`;
const Hero3 = styled("img")`
  object-fit: cover;
  border: 2px solid black;
  width: 270px;
  height: 270px;
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

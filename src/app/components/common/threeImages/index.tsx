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
      <Hero1Wrapper>
        <Hero1 src={image1} />
      </Hero1Wrapper>
      <Hero2And3Wrapper>
        <Her2Wrapper>
          <Hero2 src={image2} />
        </Her2Wrapper>
        <Hero3Wrapper>
          <Hero3 src={image3} />
        </Hero3Wrapper>
      </Hero2And3Wrapper>
    </ImegesWrapper>
  );
};

const Hero1 = styled("img")`
  width: 323px;
  object-fit: contain;
  border: 2px solid black;
`;
const Hero2 = styled("img")`
  width: 572px;
  object-fit: contain;
  border: 2px solid black;
`;
const Hero3 = styled("img")`
  object-fit: contain;
  border: 2px solid black;
  width: 271px;
`;

const Her2Wrapper = styled("div")``;
const Hero3Wrapper = styled("div")``;
const Hero2And3Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Hero1Wrapper = styled("div")``;
const ImegesWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

import { styled } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

interface ThreeImagesProps {
  image1: string;
  image2: string;
  image3: string;
}
export const ThreeImages = (props: ThreeImagesProps) => {
  const { image1, image2, image3 } = props;
  return (
    <ImegesWrapper>
      <Masonry
        columns={2}
        spacing={2}
        defaultColumns={2}
        defaultSpacing={2}
        style={{
          placeContent: "center",
          alignItems: "center",
        }}
      >
        <Hero1 src={image1} />
        <Hero2 src={image2} />
        <Hero3 src={image3} />
      </Masonry>
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
  align-items: center;
`;

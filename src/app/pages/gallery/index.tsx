import { PageLoading } from "app/components/common/pageLoading";
import { globalSelectors } from "app/containers/global/selectors";
import { WORKSHOPS, Workshops } from "config";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import { Paper, styled } from "@mui/material";
import { GlobalActions } from "app/containers/global/slice";
import { CenteredTitleAndDescription } from "app/components/common/titleDescriptionAction/centered";
import { VSpacer } from "app/components/common/vSpace";

const heights = [300, 500, 200, 100, 250, 600, 350, 450, 400, 650, 550];
// this function selects a random height from heights array
const randomHeight = () => heights[Math.floor(Math.random() * heights.length)];

export const GalleryPage = () => {
  const dispatch = useDispatch();
  const params = useParams<{ workshop: Workshops }>();
  const { workshop = "membership" } = params;
  const nfts = useSelector(globalSelectors.allNfts(workshop));
  const workshopInfo = WORKSHOPS[workshop];

  if (!nfts.length) {
    return <PageLoading />;
  }

  const handleNftClick = (index: number) => {
    const nft = nfts[index];
    dispatch(
      GlobalActions.setSelectedNftToShow({
        nft,
        workshop,
      })
    );
  };

  return (
    <>
      <CenteredTitleAndDescription
        title={workshopInfo.info.name}
        description={workshopInfo.info.descriptions}
      />
      <VSpacer size={50} />

      <Masonry columns={4} spacing={2}>
        {nfts.map((nft, index) => (
          <Item
            onClick={() => handleNftClick(index)}
            key={index}
            sx={{ height: randomHeight() }}
          >
            <ImageItem alt={nft.name} src={nft.image} />
          </Item>
        ))}
      </Masonry>
    </>
  );
};
const ImageItem = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
}));

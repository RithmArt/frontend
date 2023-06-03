import Masonry from "@mui/lab/Masonry";
import { Paper, styled } from "@mui/material";
import { PageLoading } from "app/components/common/pageLoading";
import { CenteredTitleAndDescription } from "app/components/common/titleDescriptionAction/centered";
import { VSpacer } from "app/components/common/vSpace";
import { globalSelectors } from "app/containers/global/selectors";
import { MoralisNftResult } from "app/containers/global/types";
import { treasuryGalleryInfo } from "config";
import { FC } from "react";
import { useSelector } from "react-redux";
import { randomHeight } from "utils/randomHeight";

export const TreasuryGalleryPage: FC = () => {
  const nfts: MoralisNftResult[] = useSelector(globalSelectors.treasuryNfts);

  if (!nfts.length) {
    return <PageLoading />;
  }

  const nftsToShow = nfts;
  const handleNftClick = (index: number) => {
    const nft = nftsToShow[index];
    window.open(nft?.media.media_collection?.high.url || "", "_blank");
    //   dispatch(
    //     GlobalActions.setSelectedNftToShow({
    //       nft,
    //       workshop,
    //     })
    //   );
  };
  return (
    <>
      <CenteredTitleAndDescription
        title={treasuryGalleryInfo.title}
        description={treasuryGalleryInfo.descriptions}
      />
      <VSpacer size={50} />
      <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={1}>
        {nftsToShow.map((nft, index) => {
          return (
            <Item
              onClick={() => handleNftClick(index)}
              key={index}
              sx={{ minHeight: randomHeight() }}
            >
              <ImageItem
                alt={nft.name}
                src={nft.media.media_collection?.medium.url}
              />
            </Item>
          );
        })}
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

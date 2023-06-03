import { Frame } from "app/components/common/frame";
import { SwiperSlider } from "app/components/common/swiper";
import { globalSelectors } from "app/containers/global/selectors";
import { useSelector } from "react-redux";

interface Props {
  numberOfNfts?: number;
}

export const NFTsSlider = (props: Props) => {
  const { numberOfNfts = 14 } = props;
  const nfts = useSelector(globalSelectors.allRandomNFTs);
  const randomizedNfts = nfts.sort(() => Math.random() - 0.5);
  const nftsToDisplay = randomizedNfts.slice(0, numberOfNfts);
  return (
    <SwiperSlider
      items={
        // repeat 14 divs
        nftsToDisplay.map((nft, index) => {
          return (
            <Frame
              height={500}
              src={nft.media.original_media_url}
              bottomInfo={{
                title: nft.name,
              }}
            />
          );
        })
      }
    />
  );
};

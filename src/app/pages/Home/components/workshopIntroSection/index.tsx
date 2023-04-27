import { Frame } from "app/components/common/frame";
import { Stacked } from "app/components/common/stacked";
import { TitleDescriptionAction } from "app/components/common/titleDescriptionAction";
import avatarplaceholder from "assets/images/avatarplaceholder.png";
import circularplaceholder from "assets/images/circularplaceholder.png";
import { useSelector } from "react-redux";
import { globalSelectors } from "app/containers/global/selectors";
import { Workshops } from "config";
import { NFT } from "app/containers/global/types";
import { ContainedButton } from "app/components/common/buttons/containedButton";
import { history } from "router/history";

interface Props {
  workshop: Workshops;
  isReverse?: boolean;
  numberOfNfts?: number;
}

export const WorkshopIntroSection = (props: Props) => {
  const { workshop, isReverse, numberOfNfts = 1 } = props;
  const randomNfts = useSelector(globalSelectors.randomNfts(workshop)) || [];
  // ignore eslint error because we are sure that the first two elements are not undefined
  // eslint-disable-next-line
  const nfts = randomNfts.filter((nft, index) => index < numberOfNfts);
  const nft: NFT = nfts[0] || undefined;
  const title = nft?.name || "";
  const description = nft?.description || "";

  const handleRedirectToWorkshopClick = () => {
    history.push(`/workshops/${workshop}`);
  };

  const childs = nfts.map((nft, index) => {
    return (
      <Frame
        height={500}
        key={index}
        bgVariant="monocolor"
        src={nft.image}
        bottomInfo={{
          title: nft.name,
          // description: nft.description,
          endImageIconSrc: circularplaceholder,
          startImageIconSrc: avatarplaceholder,
        }}
      />
    );
  });
  return (
    <>
      <TitleDescriptionAction
        title={title}
        reverse={isReverse}
        textAlign={isReverse ? "right" : "left"}
        description={description}
        actions={
          <ContainedButton onClick={handleRedirectToWorkshopClick}>
            view workshop
          </ContainedButton>
        }
        otherSection={
          numberOfNfts === 1 ? (
            childs
          ) : (
            <Stacked height={600} elements={childs} />
          )
        }
      />
    </>
  );
};

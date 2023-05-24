import { Frame } from "app/components/common/frame";
import { Stacked } from "app/components/common/stacked";
import { TitleDescriptionAction } from "app/components/common/titleDescriptionAction";
import avatarplaceholder from "assets/images/avatarplaceholder.png";
import circularplaceholder from "assets/images/circularplaceholder.png";
import { useSelector } from "react-redux";
import { globalSelectors } from "app/containers/global/selectors";
import { WORKSHOPS, Workshops } from "config";
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
  const workshops = WORKSHOPS;
  const workshopDescriptions = workshops[workshop]?.info.descriptions;
  const workshopName = workshops[workshop]?.info.name;

  const handleRedirectToWorkshopClick = () => {
    history.push(`/workshops/${workshop}`);
  };

  const childs = nfts.map((nft, index) => {
    return (
      <Frame
        height={500}
        key={index}
        bgVariant="monocolor"
        src={nft.media.original_media_url}
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
        title={workshopName}
        reverse={isReverse}
        textAlign={isReverse ? "right" : "left"}
        description={workshopDescriptions}
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

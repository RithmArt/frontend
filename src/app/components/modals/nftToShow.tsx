import { styled } from "@mui/material";
import { Frame } from "../common/frame";
import { SnowModal } from "../common/modal";
import { TitleDescriptionAction } from "../common/titleDescriptionAction";
import { useDispatch, useSelector } from "react-redux";
import { globalSelectors } from "app/containers/global/selectors";
import { GlobalActions } from "app/containers/global/slice";

export const ViewNftModal = () => {
  const dispatch = useDispatch();
  const selectedNft = useSelector(globalSelectors.selectedNftToShow);
  const nft = selectedNft?.nft;
  const isOpen = !!selectedNft;
  const handleCloseClick = () => {
    dispatch(GlobalActions.setSelectedNftToShow(undefined));
  };
  const handleFrameClick = () => {
    window.open(
      nft?.metadata?.external_url || nft?.media?.original_media_url || "",
      "_blank"
    );
  };
  return (
    <SnowModal title={""} isOpen={isOpen} onClose={handleCloseClick}>
      <Wrapper>
        <TitleDescriptionAction
          title={nft?.name}
          description={nft?.metadata?.description || ""}
          reverse
          textAlign="left"
          // actions={
          //   <BottomWrapper>
          //     <TitleValue title="License:" value="CC BY-NC-ND 4.0" />
          //     <TitleValue title="CollectionId:" value="3000" />
          //     <TitleValue title="Script type:" value="webGL" />
          //     <TitleValue title="Contract" value="0xa7d8...d270" />
          //     <TitleValue title="Owner" value="@0xred8...d970" />
          //   </BottomWrapper>
          // }
          otherSection={
            <Frame
              onClick={handleFrameClick}
              height={500}
              width={400}
              src={nft?.media.original_media_url || ""}
              bgVariant="monocolor"
            />
          }
        />
      </Wrapper>
    </SnowModal>
  );
};

// const BottomWrapper = styled("div")``;

const Wrapper = styled("div")`
  width: calc(100vw - 200px);
  height: calc(100vh - 500px);
  padding-right: 48px;
  display: flex;
`;

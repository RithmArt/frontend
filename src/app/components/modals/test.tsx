import { styled } from "@mui/material";
import { Frame } from "../common/frame";
import { SnowModal } from "../common/modal";
import { TitleDescriptionAction } from "../common/titleDescriptionAction";
import frametest1 from "assets/images/frametest1.png";
import { TitleValue } from "../common/TitleValue";

export const TestModal = () => {
  return (
    <SnowModal title={""} isOpen={false} onClose={() => {}}>
      <Wrapper>
        <TitleDescriptionAction
          title="arq
        Mountains"
          description="An artwork series exploring emergent natural phenomena uncovered by harnessing deeply nested fractal noise. A chaotic system where the hash of each token acts as a creative engine, generating a window into a foreign world."
          reverse
          textAlign="left"
          actions={
            <BottomWrapper>
              <TitleValue title="License:" value="CC BY-NC-ND 4.0" />
              <TitleValue title="CollectionId:" value="3000" />
              <TitleValue title="Script type:" value="webGL" />
              <TitleValue title="Contract" value="0xa7d8...d270" />
              <TitleValue title="Owner" value="@0xred8...d970" />
            </BottomWrapper>
          }
          otherSection={<Frame src={frametest1} bgVariant="monocolor" />}
        />
      </Wrapper>
    </SnowModal>
  );
};

const BottomWrapper = styled("div")``;

const Wrapper = styled("div")`
  width: calc(100vw - 200px);
  height: calc(100vh - 500px);
  padding-left: 130px;
  padding-right: 48px;
  display: flex;
`;

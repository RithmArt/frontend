import { css, styled } from "@mui/material";
import { CssVariables } from "styles/cssVariables/cssVariables";

interface FrameProps {
  src: string;
  bgVariant?: "monocolor" | "multicolor";
  bottomInfo?: {
    startImageIconSrc?: string;
    endImageIconSrc?: string;
    title: string;
    description?: string;
  };
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const Frame = (props: FrameProps) => {
  const {
    bgVariant = "multicolor",
    src,
    bottomInfo,
    height,
    width = 350,
    onClick,
  } = props;
  return (
    <Wrapper
      width={width}
      height={height}
      bgVariant={bgVariant}
      info={bottomInfo}
      onClick={onClick ? onClick : () => {}}
      style={{
        cursor: onClick ? "pointer" : "auto",
      }}
    >
      <ImageWrapper>
        <StyledImg height={height} src={src} />
      </ImageWrapper>
      {bottomInfo && (
        <InfoWrapper>
          <StartImageAndTextsWrapper>
            {bottomInfo.startImageIconSrc && (
              <InfoStartImage src={bottomInfo.startImageIconSrc} />
            )}
            <InfoTextsWrapper>
              <Title>{bottomInfo.title}</Title>
              {bottomInfo.description && (
                <Description>{bottomInfo.description}</Description>
              )}
            </InfoTextsWrapper>
          </StartImageAndTextsWrapper>
          {bottomInfo.endImageIconSrc && (
            <InfoEndImage src={bottomInfo.endImageIconSrc} />
          )}
        </InfoWrapper>
      )}
    </Wrapper>
  );
};
const ImageWrapper = styled("div")`
  flex: 1;
`;
const InfoStartImage = styled("img")`
  max-width: 64px;
  max-height: 64px;
  border-radius: 10px;
`;

const InfoEndImage = styled("img")`
  max-width: 45px;
  max-height: 45px;
  border-radius: 45px;
`;

const StartImageAndTextsWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoWrapper = styled("div")`
  padding: 12px 14px;
  background: #4f4545;
  border: 2px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoTextsWrapper = styled("div")``;
const Title = styled("h3")`
  margin: 0;
  padding: 0;
  font-size: 22px;
  color: ${CssVariables.white};
`;
const Description = styled("p")`
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: ${CssVariables.white};
`;

const StyledImg = styled("img")<{ height?: number }>`
  flex: 1;
  border: 2px solid black;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  /* ${({ height }) =>
    height
      ? css`
          height: ${height - 155}px;
          object-fit: cover;
        `
      : "height:fit-content;"} */
`;

const Wrapper = styled("div")<{
  bgVariant?: FrameProps["bgVariant"];
  width: number;
  height?: number;
  info: FrameProps["bottomInfo"];
}>`
  display: flex;
  flex-direction: column;
  background: ${({ bgVariant }) => {
    return bgVariant === "monocolor"
      ? CssVariables.frameColor
      : `linear-gradient(0deg, transparent 30%,${CssVariables.frameColor}  30%);`;
  }};
  width: ${({ width }) => width}px;
  ${({ height }) => (height ? `height: ${height}px;` : "height:fit-content;")}
  padding:20px;
  gap: 20px;
  border: 2px solid black;
`;

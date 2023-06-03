import React, { FC, forwardRef } from "react";
import { SnowModalProps } from "./types";
import { StyledDialog, Wrapper, ChildWrapper } from "./style";
import { styled, Typography, Zoom, ZoomProps } from "@mui/material";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { mobile } from "styles/media";

const Transition = forwardRef<HTMLDivElement, ZoomProps>((props, ref) => {
  return <Zoom ref={props.ref} {...props} timeout={300} />;
});

export const SnowModal: FC<SnowModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  return (
    <StyledDialog
      TransitionComponent={Transition}
      fullScreen={false}
      open={isOpen}
      onClose={() => (onClose ? onClose() : null)}
    >
      <Wrapper>
        <ContentWrapper>
          <TopWrapper>
            {title ? <Title variant="h2">{title}</Title> : <div />}
            {onClose ? (
              <CloseWrapper onClick={() => onClose()}>X</CloseWrapper>
            ) : (
              <div />
            )}
          </TopWrapper>
          <ChildWrapper>{children}</ChildWrapper>
        </ContentWrapper>
      </Wrapper>
    </StyledDialog>
  );
};

const ContentWrapper = styled("div")`
  background: ${CssVariables.modalContentBackground};
`;

const TopWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
});

const CloseWrapper = styled("div")({
  cursor: "pointer",
  color: CssVariables.white,
  position: "absolute",
  right: -6,
  top: -53,
  fontSize: 36,
  width: 30,
  height: 30,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  [mobile]: {
    width: 25,
    height: 25,
  },
});
const Title = styled(Typography)({
  color: CssVariables.white,
  textTransform: "uppercase",
});

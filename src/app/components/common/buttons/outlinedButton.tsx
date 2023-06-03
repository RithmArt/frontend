import { styled } from "@mui/material";
import React, { FC } from "react";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { SnowButtonProps } from "../../base/snowButton";
import { ContainedButton } from "./containedButton";

export const OutlinedButton: FC<SnowButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled(ContainedButton)(({ theme }) => ({
  borderRadius: CssVariables.buttonBorderRadius,
  backgroundColor: "transparent",
  border: `2px solid ${CssVariables.white}`,
  borderWidth: "2px",
  "&:hover": {
    borderWidth: "2px",
  },
  "&.Mui-disabled": {
    border: `2px solid ${CssVariables.white}`,
  },
}));

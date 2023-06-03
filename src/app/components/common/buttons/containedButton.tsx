import { styled } from "@mui/material";
import { SnowButtonProps, SnowButton } from "app/components/base/snowButton";
import { FC } from "react";
import { CssVariables } from "styles/cssVariables/cssVariables";

export const ContainedButton: FC<SnowButtonProps> = (props) => {
  return <StyledButton variant="contained" {...props} />;
};

const StyledButton = styled(SnowButton)(({ theme }) => ({
  color: CssVariables.white,
  padding: "15px 25px",
  borderRadius: CssVariables.buttonBorderRadius,
  minWidth: "160px",
  "&.Mui-disabled": {
    color: CssVariables.white,
    backgroundColor: CssVariables.primaryDisabled,
    opacity: 0.5,
  },
}));

import { Dialog, styled } from "@mui/material";
import { mobile } from "styles/media";
import { CssVariables } from "../../../../styles/cssVariables/cssVariables";

export const StyledDialog = styled(Dialog)({
  background: CssVariables.modalOverlayBackground,
  ".MuiDialog-paper": {
    maxWidth: "100%",
    backgroundColor: "transparent",
    overflowX: "hidden",

    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: CssVariables.white,
      borderRadius: 8,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: CssVariables.actionColor,
      borderRadius: 8,
    },

    [mobile]: {
      minWidth: "95%",
    },
  },
});

export const Wrapper = styled("div")({
  minWidth: "600px",
  background: CssVariables.modalBackground,
  padding: "75px 20px 20px 20px",
  cursor: "auto",
  [mobile]: {
    minWidth: "80vw",
    padding: "25px 20px",
  },
});
export const ChildWrapper = styled("div")({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  color: CssVariables.commonTextColor,
});

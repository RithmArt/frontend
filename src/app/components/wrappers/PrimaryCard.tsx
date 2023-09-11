import { styled } from "@mui/material";

import { CssVariables } from "styles/cssVariables/cssVariables";
import { mobile } from "styles/media";

export const PrimaryCardWrapper = styled("div")({
  backgroundColor: CssVariables.poolCardBackground,
  borderRadius: "0px",
  padding: "26px 32px",

  [mobile]: {
    padding: 15,
    width: "100%",
  },
});

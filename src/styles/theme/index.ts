import { createTheme } from "@mui/material";
import { FontFamilies } from "styles/cssVariables/cssVariables";

let theme = createTheme({
  direction: "ltr",
  palette: {
    secondary: {
      main: "#d20e42",
    },
    primary: {
      main: "#151515",
    },
    action: {
      disabledBackground: "#efefef",
      disabled: "#333333",
    },
    background: {
      paper: "#000000",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: "Poppins",
    h2: {
      fontSize: "26px",
      fontFamily: FontFamilies.Poppins,

      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
    },
    h5: {
      fontSize: "20px",
      fontFamily: FontFamilies.Poppins,
    },
    body1: {
      fontSize: "16px",
      fontFamily: FontFamilies.Poppins,
      fontWeight: "bold",
      color: "white",
    },
    body2: {
      fontSize: "16px",
      fontFamily: FontFamilies.Poppins,
    },
  },
});

export { theme };

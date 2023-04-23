import { Box, styled } from "@mui/material";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { CssVariables } from "styles/cssVariables/cssVariables";

export default function ListItems({ heading, items }): ReactElement {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <CustomList>
        <li>
          <p>{heading}</p>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.subHeading}</Link>
          </li>
        ))}
      </CustomList>
    </Box>
  );
}

const CustomList = styled("ul")({
  minHeight: "200px",
  listStyle: "none",
  color: CssVariables.white,
  p: {
    fontWeight: 700,
  },
  li: {
    padding: "5px",
  },
  "li a": {
    textDecoration: "none",
    whiteSpace: "nowrap",
    color: CssVariables.white,
  },
});

import { Box, styled } from "@mui/material";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import {
  mediaQuery282,
  mediaQuery377,
  mediaQuery825,
  mobile,
} from "styles/media";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { history } from "router/history";

export default function ListItems({ heading, items }): ReactElement {
  const handleLinkClick = (link) => {
    if (link.includes("http")) {
      window.open(link, "_blank");
    } else {
      history.push(link);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <CustomList>
        <li>
          <Title>{heading}</Title>
        </li>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <SubTitle onClick={() => handleLinkClick(item.link)}>
                {item.subHeading}
              </SubTitle>
            </li>
          );
        })}
      </CustomList>
    </Box>
  );
}

const CustomList = styled("ul")({
  minHeight: "200px",
  minWidth: "200px",
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "171px",
  height: "170.47px",
  gap: "10px",
  color: CssVariables.white,
  [mobile]: {
    alignItems: "center",
    transform: "translateX(-10%)",
  },
});

const Title = styled("h5")`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  @media (max-width: ${mediaQuery377}) {
    font-size: 17px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 16px;
  }
`;

const SubTitle = styled("p")`
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  white-space: nowrap;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${CssVariables.white};
  @media (max-width: ${mediaQuery825}) {
    font-size: 16px;
  }
  @media (max-width: ${mediaQuery377}) {
    font-size: 15px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 14px;
  }
`;

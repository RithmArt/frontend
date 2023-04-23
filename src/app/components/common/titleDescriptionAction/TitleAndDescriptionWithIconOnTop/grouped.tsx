import { styled } from "@mui/material";
import { FC } from "react";

export const GroupedTitleAndDescriptionWithIconOnTop: FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
`;

import { styled } from "@mui/material";
import { FC, ReactNode } from "react";

export const GroupedTitleAndDescriptionWithIconOnTop: FC<{
  children: ReactNode;
}> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  padding: 24px 0px;
`;

import { styled } from "@mui/material";

export const VSpacer = styled("div")<{ size: number }>`
  width: 100%;
  height: ${(props) => props.size}px;
`;

import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StackedProps {
  elements: ReactNode[];
  height: number;
}
export const Stacked = (props: StackedProps) => {
  const { elements, height } = props;
  return (
    <Wrapper height={height}>
      {elements.map((child, index) => {
        return (
          <StackWrapper index={index} key={index}>
            {child}
          </StackWrapper>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ height: number }>`
  position: relative;
  height: ${({ height }) => height}px;
`;
const StackWrapper = styled("div")<{ index: number }>`
  position: absolute;
  top: ${({ index }) => index * 60}px;
  left: ${({ index }) => index * 160}px;
`;

import { styled } from "@mui/material";
import { FontFamilies } from "styles/cssVariables/cssVariables";
import { Title } from "../title";
import { mediaQuery282, mediaQuery395 } from "styles/media";

interface TitleValueProps {
  title: string;
  value: string;
}

export const TitleValue = (props: TitleValueProps) => {
  const { title, value } = props;
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <Value>{value}</Value>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTitle = styled(Title)`
  font-size: 18px;
  font-weight: 400;
  font-family: ${FontFamilies.Inter};
  @media (max-width: ${mediaQuery395}) {
    font-size: 17px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 16px;
  }
`;

const Value = styled("div")`
  font-weight: 500;
  font-size: 18px;
  @media (max-width: ${mediaQuery395}) {
    font-size: 17px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 16px;
  }
`;

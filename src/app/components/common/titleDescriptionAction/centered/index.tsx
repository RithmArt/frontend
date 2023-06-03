import { styled } from "@mui/material";

import { Description } from "../../description";
import { Title } from "../../title";
import {
  mediaQuery545,
  mediaQuery417,
  mediaQuery395,
  mediaQuery282,
  mediaQuery825,
} from "styles/media";

interface CenteredTitleAndDescriptionProps {
  title: string;
  description: string;
}
export const CenteredTitleAndDescription = (
  props: CenteredTitleAndDescriptionProps
) => {
  const { description, title } = props;
  return (
    <TitleDescriptionWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </TitleDescriptionWrapper>
  );
};

const TitleDescriptionWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: auto;
  max-width: 580px;
`;
const StyledTitle = styled(Title)`
  font-size: 45px;
  white-space: nowrap;
  text-align: center;

  @media (max-width: ${mediaQuery825}) {
    font-size: 42px;
    white-space: normal;
  }
  @media (max-width: ${mediaQuery417}) {
    white-space: normal;
    font-size: 38px;
  }
  @media (max-width: ${mediaQuery395}) {
    font-size: 37px;
    white-space: normal;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 32px;
    white-space: normal;
  }
`;

const StyledDescription = styled(Description)`
  text-align: center;
  font-size: 20px;
  @media (max-width: ${mediaQuery825}) {
    font-size: 17px;
  }
  @media (max-width: ${mediaQuery545}) {
    font-size: 16px;
  }
  @media (max-width: ${mediaQuery417}) {
    font-size: 18px;
  }

  @media (max-width: ${mediaQuery395}) {
    font-size: 16px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 13px;
  }
`;

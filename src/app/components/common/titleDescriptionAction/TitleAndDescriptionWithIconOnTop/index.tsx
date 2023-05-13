import { styled } from "@mui/material";
import { Description } from "../../description";
import { Title } from "../../title";
import {
  mediaQuery417,
  mediaQuery395,
  mediaQuery545,
  mediaQuery282,
  mediaQuery825,
} from "styles/media";

interface TitleAndDescriptionWithIconOnTopProps {
  title: string;
  description: string;
  iconSrc: string;
}

export const TitleAndDescriptionWithIconOnTop = (
  props: TitleAndDescriptionWithIconOnTopProps
) => {
  const { title, description, iconSrc } = props;

  return (
    <TitleDescriptionWrapper>
      <Icon src={iconSrc} />
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
  max-width: 350px;
  text-align: center;
`;
const Icon = styled("img")`
  max-width: 64px;
  @media (max-width: ${mediaQuery825}) {
    max-width: 62px;
  }
  @media (max-width: ${mediaQuery545}) {
    max-width: 60px;
  }
  @media (max-width: ${mediaQuery417}) {
    max-width: 60px;
  }
  @media (max-width: ${mediaQuery395}) {
    max-width: 55px;
  }
  @media (max-width: ${mediaQuery282}) {
    max-width: 50px;
  }
`;
const StyledTitle = styled(Title)`
  font-size: 28px;
  font-weight: 600;

  @media (max-width: ${mediaQuery825}) {
    font-size: 27px;
  }
  @media (max-width: ${mediaQuery545}) {
    font-size: 23px;
  }

  @media (max-width: ${mediaQuery417}) {
    font-size: 25px;
  }
  @media (max-width: ${mediaQuery395}) {
    font-size: 23px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 20px;
  }
`;

const StyledDescription = styled(Description)`
  font-size: 20px;

  @media (max-width: ${mediaQuery825}) {
    font-size: 16px;
  }
  @media (max-width: ${mediaQuery545}) {
    font-size: 15px;
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

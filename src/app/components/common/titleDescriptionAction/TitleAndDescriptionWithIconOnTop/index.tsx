import { styled } from "@mui/material";
import { Description } from "../../description";
import { Title } from "../../title";

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
`;
const StyledTitle = styled(Title)`
  font-size: 28px;
  font-weight: 600;
`;

const StyledDescription = styled(Description)`
  font-size: 20px;
`;

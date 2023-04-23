import { styled } from "@mui/material";
import { Description } from "../../description";
import { Title } from "../../title";

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
`;
const StyledDescription = styled(Description)`
  font-size: 20px;
`;

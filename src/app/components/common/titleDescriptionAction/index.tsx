import { css, styled } from "@mui/material";
import { ReactNode } from "react";
import { CssVariables } from "styles/cssVariables/cssVariables";

interface TitleDescriptionActionProps {
  title: string | ReactNode;
  description: string | string[];
  textAlign?: "left" | "center" | "right";
  actions?: ReactNode;
  otherSection?: ReactNode;
  reverse?: boolean;
  top?: ReactNode;
}

export const TitleDescriptionAction = (props: TitleDescriptionActionProps) => {
  const {
    actions,
    description,
    title,
    reverse,
    textAlign = "left",
    otherSection,
    top,
  } = props;
  return (
    <Wrapper reverse={reverse ? "true" : "false"}>
      <TitleDescriptionActionsSection textAlign={textAlign}>
        {top}
        <Title>{title}</Title>
        {typeof description === "string" ? (
          <Descriptions>{description}</Descriptions>
        ) : (
          description.map((item, index) => (
            <Descriptions key={index} index={index}>
              {item}
            </Descriptions>
          ))
        )}
        {actions && (
          <ActionsWrapper align={textAlign}> {actions}</ActionsWrapper>
        )}
      </TitleDescriptionActionsSection>
      <OtherSection>{otherSection}</OtherSection>
    </Wrapper>
  );
};

const TitleDescriptionActionsSection = styled("div")<{
  textAlign: TitleDescriptionActionProps["textAlign"];
}>`
  ${({ textAlign }) => {
    return css`
      text-align: ${textAlign};
    `;
  }}
  max-width:50%;
`;
const Descriptions = styled("p")<{ index?: number }>`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  ${({ index }) =>
    index && index !== 0
      ? css`
          margin-top: 20px;
        `
      : ""}
`;

const Title = styled("h3")`
  padding: 0;
  margin: 0;
  font-size: 45px;
  font-weight: 400;
`;

const OtherSection = styled("div")``;

const ActionsWrapper = styled("div")<{
  align: TitleDescriptionActionProps["textAlign"];
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  ${({ align }) => {
    return css`
      justify-content: ${align === "center"
        ? "center"
        : align === "right"
        ? "flex-end"
        : "flex-start"};
    `;
  }}
`;

const Wrapper = styled("div")<{ reverse: "true" | "false" }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${({ reverse }) =>
    reverse === "true"
      ? css`
          flex-direction: row-reverse;
        `
      : ""};
  color: ${CssVariables.white};
  justify-content: space-between;
  align-items: center;
`;

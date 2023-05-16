import { Container, css, styled } from "@mui/material";
import { ReactNode } from "react";
import { CssVariables } from "styles/cssVariables/cssVariables";
import {
  mediaQuery1024,
  mediaQuery377,
  mediaQuery395,
  mediaQuery417,
  mediaQuery545,
  mediaQuery282,
  mediaQuery825,
} from "styles/media";

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
    <ContainerWrapper maxWidth="xl">
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
    </ContainerWrapper>
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
  width: 579px;
  height: 466px;
  max-width: 50%;
  @media (max-width: ${mediaQuery1024}) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    text-align: center;
  }
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

  @media (max-width: ${mediaQuery825}) {
    font-size: 17px;
  }

  @media (max-width: ${mediaQuery417}) {
    font-size: 18px;
  }
  @media (max-width: ${mediaQuery395}) {
    font-size: 17px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 13px;
  }
`;

const Title = styled("h3")`
  padding: 0;
  margin: 0;
  font-size: 45px;
  font-weight: 400;
  @media (max-width: ${mediaQuery1024}) {
    margin-bottom: 14px;
  }
  @media (max-width: ${mediaQuery545}) {
    font-size: 40px;
  }

  @media (max-width: ${mediaQuery377}) {
    font-size: 40px;
  }
  @media (max-width: ${mediaQuery282}) {
    font-size: 34px;
  }
`;

const OtherSection = styled("div")`
  @media (max-width: ${mediaQuery1024}) {
    display: none;
  }
`;

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
  @media (max-width: ${mediaQuery1024}) {
    display: flex;
    justify-content: center;
  }
`;

const Wrapper = styled("div")<{ reverse: "true" | "false" }>`
  display: flex;
  flex-wrap: nowrap;
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

const ContainerWrapper = styled(Container)`
  margin: 0px 0;
`;

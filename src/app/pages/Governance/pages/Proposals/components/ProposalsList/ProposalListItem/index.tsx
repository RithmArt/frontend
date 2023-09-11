import { FC } from "react";
import { Grid, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { translations } from "locales/i18n";
import { CssVariables } from "styles/cssVariables/cssVariables";
import { PrimaryCardWrapper } from "app/components/wrappers/PrimaryCard";
import { Proposal } from "app/containers/BlockChain/Governance/types";

interface ProposalListItemProps {
  proposal: Proposal;
}

export const ProposalListItem: FC<ProposalListItemProps> = ({ proposal }) => {
  const { t } = useTranslation();

  return <PrimaryCardWrapper></PrimaryCardWrapper>;
};

const TitleAndUserAddressWrapper = styled(Grid)``;

const Title = styled(Typography)({
  color: CssVariables.white,
  textTransform: "uppercase",
  fontSize: "36px",
  fontWeight: "400",
  lineHeight: 1,
});

const Text = styled(Typography)({
  color: CssVariables.white,
});

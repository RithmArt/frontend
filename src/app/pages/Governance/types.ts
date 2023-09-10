import { Proposal } from "app/containers/BlockChain/Governance/types";

export interface ExecutionContext {
  description: string;
  contractAddress: string;
  avaxValue: string;
  data: string;
}

export interface AllocationSorting {
  order: "asc" | "desc";
  orderBy: string;
}

/* --- STATE --- */
export interface GovernancePageState {
  isVoteAllocationSelectionOpen: boolean;
  pairSearchInput: string;
  selectedPoolProviders: string[];
  isVotingForFarms: boolean;
  submittedExecutionContexts: ExecutionContext[];
  currentExecutionContext: ExecutionContext;
  newProposalFields: {
    title: string;
    description: string;
    discussion: string;
    document: string;
    votingPeriod: string;
    error: {
      title: string;
      description: string;
      votingPeriod: string;
    };
  };
  isModalOpen: boolean;
  selectedProposal: Proposal | undefined;
  isVoteAllocationModalOpen: boolean;
  allocationSortingData: AllocationSorting;
}

export type ContainerState = GovernancePageState;

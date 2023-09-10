import { PayloadAction } from "@reduxjs/toolkit";
import { AllocationSorting, ContainerState } from "./types";
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { governancePageSaga } from "./saga";
import { Proposal } from "app/containers/BlockChain/Governance/types";

// The initial state of the GovernancePage container
export const initialState: ContainerState = {
  isVoteAllocationSelectionOpen: false,
  pairSearchInput: "",
  selectedPoolProviders: [],
  isVotingForFarms: false,
  submittedExecutionContexts: [],
  currentExecutionContext: {
    description: "",
    contractAddress: "",
    avaxValue: "",
    data: "",
  },
  newProposalFields: {
    title: "",
    description: "",
    discussion: "",
    document: "",
    votingPeriod: process.env.REACT_APP_MINIMUM_VOTING_PERIOD || "3",
    error: {
      title: "",
      description: "",
      votingPeriod: "",
    },
  },
  isModalOpen: false,
  selectedProposal: undefined,
  isVoteAllocationModalOpen: false,
  allocationSortingData: {
    order: "asc",
    orderBy: "name",
  },
};

const governancePageSlice = createSlice({
  name: "governancePage",
  initialState,
  reducers: {
    setIsVoteAllocationSelectionOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isVoteAllocationSelectionOpen = action.payload;
    },
    setPairSearchInput: (state, action: PayloadAction<string>) => {
      state.pairSearchInput = action.payload;
    },
    toggleSelectedPoolProvider: (state, action: PayloadAction<string>) => {
      const { selectedPoolProviders } = state;
      const { payload } = action;
      if (selectedPoolProviders.includes(payload)) {
        selectedPoolProviders.splice(selectedPoolProviders.indexOf(payload), 1);
      } else {
        selectedPoolProviders.push(payload);
      }
      state.selectedPoolProviders = selectedPoolProviders;
    },

    setIsVotingForFarms: (state, action: PayloadAction<boolean>) => {
      state.isVotingForFarms = action.payload;
    },
    resetNewProposalFields(state, action: PayloadAction<void>) {
      state.currentExecutionContext = {
        ...initialState.currentExecutionContext,
      };
      state.submittedExecutionContexts = [];
      state.newProposalFields = {
        ...initialState.newProposalFields,
        error: {
          ...initialState.newProposalFields.error,
        },
      };
    },
    setNewProposalFields(
      state,
      action: PayloadAction<{
        key: keyof ContainerState["newProposalFields"];
        value;
      }>
    ) {
      state.newProposalFields[action.payload.key] = action.payload.value;
    },
    setNewProposalError(
      state,
      action: PayloadAction<{
        key: keyof ContainerState["newProposalFields"]["error"];
        value: string;
      }>
    ) {
      state.newProposalFields.error[action.payload.key] = action.payload.value;
    },
    setCurrentExecutionContextField(
      state,
      action: PayloadAction<{
        key: keyof ContainerState["currentExecutionContext"];
        value;
      }>
    ) {
      state.currentExecutionContext[action.payload.key] = action.payload.value;
    },
    addToSubmittedExecutionContexts(
      state,
      action: PayloadAction<ContainerState["currentExecutionContext"]>
    ) {
      state.submittedExecutionContexts.push(action.payload);
      state.currentExecutionContext = {
        ...initialState.currentExecutionContext,
      };
    },
    setExecutionContextArray(
      state,
      action: PayloadAction<ContainerState["submittedExecutionContexts"]>
    ) {
      state.submittedExecutionContexts = action.payload;
    },
    removeFromSubmittedExecutionContexts(
      state,
      action: PayloadAction<{ index: number }>
    ) {
      const { submittedExecutionContexts } = state;
      const tmpSubmittedExecutionContexts = [...submittedExecutionContexts];
      const { payload } = action;
      const { index } = payload;
      tmpSubmittedExecutionContexts.splice(index, 1);
      state.submittedExecutionContexts = tmpSubmittedExecutionContexts;
    },
    setSubmittedExecutionContextForEditing(
      state,
      action: PayloadAction<{ index: number }>
    ) {
      const { submittedExecutionContexts } = state;
      const tmpSubmittedExecutionContexts = [...submittedExecutionContexts];
      const { payload } = action;
      const { index } = payload;
      state.currentExecutionContext = tmpSubmittedExecutionContexts[index];
      tmpSubmittedExecutionContexts.splice(index, 1);
      state.submittedExecutionContexts = tmpSubmittedExecutionContexts;
    },
    submitNewProposal: (state, action: PayloadAction<void>) => {},
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setSelectedProposal: (
      state,
      action: PayloadAction<Proposal | undefined>
    ) => {
      state.selectedProposal = action.payload;
    },
    setIsVoteAllocationModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isVoteAllocationModalOpen = action.payload;
    },
    setSortingData: (state, action: PayloadAction<AllocationSorting>) => {
      state.allocationSortingData = action.payload;
    },
  },
});

export const {
  actions: GovernancePageActions,
  reducer: GovernancePageReducer,
  name: sliceKey,
} = governancePageSlice;

export const useGovernancePageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: GovernancePageReducer });
  useInjectSaga({ key: sliceKey, saga: governancePageSaga });
  return { GovernancePageActions };
};

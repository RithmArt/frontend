// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';

import { GovernanceActions } from "app/containers/BlockChain/Governance/slice";
import { put, select, takeLatest } from "redux-saga/effects";
import { GovernancePageDomains } from "./selectors";
import { GovernancePageActions } from "./slice";

export function* submitNewProposal() {
  const newProposalFields = yield select(
    GovernancePageDomains.newProposalFields
  );
  const executionContexts = yield select(
    GovernancePageDomains.submittedExecutionContexts
  );
  yield put(
    GovernanceActions.submitNewProposal({
      executionContexts,
      newProposalFields,
    })
  );
}

export function* governancePageSaga() {
  yield takeLatest(
    GovernancePageActions.submitNewProposal.type,
    submitNewProposal
  );
}

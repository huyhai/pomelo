import { createReducer } from 'reduxsauce'
import * as actions from './generalActions'

export const INITIAL_STATE = {
    listTransactions: [],
    fetchingData: false
};

export const fetchFakeData = state => ({
    ...state,
    fetchingData: true
});

export const fetchFakeDataSuccess = (state, action) => ({
    ...state,
    listTransactions: action.payload,
    fetchingData: false
});

export const fetchFakeDataFailure = state => ({
    ...state,
    fetchingData: false
});

export const ACTION_HANDLERS = {
  [actions.FETCH_FAKE_DATA]: fetchFakeData,
  [actions.FETCH_FAKE_DATA_SUCCESS]: fetchFakeDataSuccess,
  [actions.FETCH_FAKE_DATA_FAILED]: fetchFakeDataFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

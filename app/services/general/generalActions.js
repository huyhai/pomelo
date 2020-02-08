export const FETCH_FAKE_DATA = 'FETCH_FAKE_DATA';
export const FETCH_FAKE_DATA_SUCCESS = 'FETCH_FAKE_DATA_SUCCESS';
export const FETCH_FAKE_DATA_FAILED = 'FETCH_FAKE_DATA_FAILED';

export const fetchFakeData = () => ({
  type: FETCH_FAKE_DATA
});

export const fetchFakeDataSuccess = payload => ({
  type: FETCH_FAKE_DATA_SUCCESS,
  payload
});

export const fetchFakeDataFailed = () => ({
  type: FETCH_FAKE_DATA_FAILED
});

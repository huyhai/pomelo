import { takeEvery, call, put } from 'redux-saga/effects'
import * as actions from './generalActions'

export default api => {
  function* worker(action) {
    switch (action.type) {
      case actions.FETCH_FAKE_DATA:
        {
            const response = yield call(api.getFakeData);
            if (response) {
            yield put(actions.fetchFakeDataSuccess(response.items))
          } else {
            yield put(actions.fetchFakeDataFailed())
          }
        }
    }
  }

  function* watcher() {
    yield takeEvery(
      [actions.FETCH_FAKE_DATA],
      worker
    )
  }

  return { worker, watcher }
}

import { call, put, fork, takeEvery, select } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { getValues } from "./selectors";
import { INIT, INIT_SUCCESS, INIT_FAILURE } from "./actions";

// export function* saveCheckIn(action = {}) {
//   console.log(action);
//   const { payload = {} } = action;
//   const values = yield select(getValues);
//
//   try {
//     const resp = yield call(fetch, '/api/check-in', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     });
//
//     if (resp.ok) {
//       const body = yield call(resp.json);
//
//       return yield put({
//         type: SAVE_FORM_SUCCESS,
//         payload: body,
//         meta: {},
//       });
//     }
//
//     return yield put({
//       type: SAVE_FORM_FAILURE,
//       payload: resp.body || {},
//       meta: {},
//     });
//   } catch (err) {
//     return yield put({
//       type: SAVE_FORM_FAILURE,
//       payload,
//       meta: { error: err.message },
//     });
//   }
// }
//
export function* getProcesses() {
  const resp = yield call(fetch, "/v1/processes.json", {
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (resp.ok) {
    const body = yield call([resp, resp.json]);
    return yield put({
      type: INIT_SUCCESS,
      payload: body
    });
  } else {
    return yield put({
      type: INIT_FAILURE
    });
  }
}

export default function* root() {
  yield takeEvery(INIT, getProcesses);
  // yield takeEvery(SAVE_FORM, saveCheckIn);
}

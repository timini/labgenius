import { call, put, fork, takeEvery, select } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import {
  INIT,
  LOAD_STATUS,
  LOAD_STATUS_SUCCESS,
  LOAD_STATUS_FAILURE,
  LOAD_PROCESS,
  LOAD_PROCESS_SUCCESS,
  LOAD_PROCESS_FAILURE,
  NEXT,
  NEXT_SUCCESS,
  NEXT_FAILURE
} from "./actions";

import { requiresData, getModel } from "./selectors";


export function* getStatus(action) {
  const { payload: { id } = {} } = action;
  try {
    const resp = yield call(fetch, `/v1/processes/${id}/status.json`);

    if (resp.ok) {
      const body = yield call([resp, resp.json]);
      return yield put({
        type: LOAD_STATUS_SUCCESS,
        payload: { ...body },
        meta: {}
      });
    }

    return yield put({
      type: LOAD_STATUS_FAILURE,
      payload: resp.body || {},
      meta: {}
    });
  } catch (err) {
    return yield put({
      type: LOAD_STATUS_FAILURE,
      payload: {},
      meta: { error: err.message }
    });
  }
}

export function* getProcess(action) {
  const { payload: { id } = {} } = action;
  try {
    const resp = yield call(fetch, `/v1/processes/${id}.json`);

    if (resp.ok) {
      const body = yield call([resp, resp.json]);
      return yield put({
        type: LOAD_PROCESS_SUCCESS,
        payload: { ...body },
        meta: {}
      });
    }

    return yield put({
      type: LOAD_PROCESS_FAILURE,
      payload: resp.body || {},
      meta: {}
    });
  } catch (err) {
    return yield put({
      type: LOAD_PROCESS_FAILURE,
      payload: {},
      meta: { error: err.message }
    });
  }
}

export function* next(action) {
  const { payload: { id } = {} } = action;
  const dataRequired = yield select(requiresData);
  if (dataRequired) {
    const { data: { wells } = {}} = yield select(getModel)
    console.log(wells);
    const resp = yield call(fetch, `/v1/processes/${id}/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(wells),
    });
  }
  try {
    const resp = yield call(fetch, `/v1/processes/${id}/next`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (resp.status === 202) {
      return yield put({
        type: NEXT_SUCCESS,
        payload: { id },
        meta: {}
      });
    }

    return yield put({
      type: NEXT_FAILURE,
      payload: resp.body || {},
      meta: {}
    });
  } catch (err) {
    return yield put({
      type: NEXT_FAILURE,
      payload: {},
      meta: { error: err.message }
    });
  }
}

export function* init(action) {
  const { payload, meta } = action;
  yield [
    put({ type: LOAD_STATUS, payload, meta }),
    put({ type: LOAD_PROCESS, payload, meta })
  ];
}

export default function* root() {
  yield [
    takeEvery(INIT, init),
    takeEvery(LOAD_STATUS, getStatus),
    takeEvery(LOAD_PROCESS, getProcess),
    takeEvery(NEXT, next),
    takeEvery(NEXT_SUCCESS, getStatus)
  ];
}

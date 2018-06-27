import { all, fork } from "redux-saga/effects";

import * as ProcessList from "./ProcessList";
import * as ProcessDetail from "./ProcessDetail";

// add component here to have the sagas and reducers run
const components = [ProcessList, ProcessDetail];

// Construct a map of module names to their reducers
export const reducers = components.reduce((acc, { reducer, NAME }) => {
  if (reducer && NAME) {
    acc[NAME] = reducer;
  }
  return acc;
}, {});

// Construct an array of the modules' root sagas
const componentSagas = components.reduce((acc, { saga }) => {
  if (saga) acc.push(saga);
  return acc;
}, []);

export function* sagas() {
  for (let saga of componentSagas) {
    yield fork(saga);
  }
}

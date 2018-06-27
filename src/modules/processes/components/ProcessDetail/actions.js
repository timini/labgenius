import { createFSA } from "../../../../utils/actions";

import { PATH } from "./constants";
const BASE = PATH.join("/");

export const INIT = `${BASE}/INIT`;
export const init = createFSA(INIT);

export const NEXT = `${BASE}/NEXT`;
export const NEXT_SUCCESS = `${NEXT}_SUCCESS`;
export const NEXT_FAILURE = `${NEXT}_FAILURE`;
export const next = createFSA(NEXT);

export const LOAD_STATUS = `${BASE}/LOAD_STATUS`;
export const LOAD_STATUS_SUCCESS = `${LOAD_STATUS}_SUCCESS`;
export const LOAD_STATUS_FAILURE = `${LOAD_STATUS}_FAILURE`;

export const LOAD_PROCESS = `${BASE}/LOAD_PROCESS`;
export const LOAD_PROCESS_SUCCESS = `${LOAD_PROCESS}_SUCCESS`;
export const LOAD_PROCESS_FAILURE = `${LOAD_PROCESS}_FAILURE`;

export const UPDATE_WELL = `${BASE}/UPDATE_WELL`;
export const updateWell = createFSA(UPDATE_WELL);

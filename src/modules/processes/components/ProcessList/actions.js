import { createFSA } from "../../../../utils/actions";
import { PATH } from "./constants";

const BASE = PATH.join("/");

export const INIT = `${BASE}/INIT`;
export const INIT_SUCCESS = `${INIT}_SUCCESS`;
export const INIT_FAILURE = `${INIT}_FAILURE`;
export const init = createFSA(INIT);

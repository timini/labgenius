import update from "react-addons-update";
import { INIT, INIT_SUCCESS, INIT_FAILURE } from "./actions";

export const initialState = {
  ui: {
    loading: 0
  },
  data: {
    processes: []
  }
};

export const reducer = (state = initialState, action = {}) => {
  const { type, payload, meta } = action;
  switch (type) {
    case INIT:
      return update(state, { ui: { $set: state.ui.loading + 1 } });
    case INIT_SUCCESS:
      return update(state, {
        ui: { $set: state.ui.loading - 1 },
        data: { processes: { $set: payload.processes } }
      });
    case INIT_FAILURE:
      return update(state, { ui: { $set: state.ui.loading - 1 } });
    default:
      return state;
  }
};

export default reducer;

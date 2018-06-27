import update from "react-addons-update";
import {
  INIT,
  LOAD_STATUS_SUCCESS,
  LOAD_PROCESS_SUCCESS,
  UPDATE_WELL
} from "./actions";

export const initialState = {
  ui: {
    loading: true
  },
  data: {
    id: undefined,
    status: "",
    process: {},
    wells: {}
  }
};

export const reducer = (state = initialState, action = {}) => {
  const { type, payload, meta } = action;
  switch (type) {
    case INIT:
      return update(state, {
        ui: { loading: { $set: true } },
        data: { id: { $set: payload.id } }
      });
    case LOAD_STATUS_SUCCESS:
      return update(state, {
        data: { status: { $set: payload.status } }
      });
    case LOAD_PROCESS_SUCCESS:
      const { processes = [] } = payload;
      const pro = processes[0];
      let { wells = [] } = pro;
      wells = Object.assign(...wells.map(key => ({ [key]: undefined })));
      return {
        ...state,
        data: {
          ...state.data,
          wells,
          process: pro
        }
      };
    case UPDATE_WELL:
      const { id, value } = payload;
      return update(state, {
        data: {
          wells: {
            $set: {
              ...state.data.wells,
              [id]: parseInt(value, 10)
            }
          }
        }
      });
    default:
      return state;
  }
};

export default reducer;

import {
  createMapStateToProps,
  createMapDispatchToProps,
  createPropTypes,
  createDefaultProps
} from "../../../../utils/props";

import {
  getStatus,
  getProcess,
  getId,
  isLoading,
  requiresData,
  wellsComplete
} from "./selectors";
import { init, next, updateWell } from "./actions";

// all the props (excluding actions)
const data = {
  id: getId,
  status: getStatus,
  process: getProcess,
  isLoading,
  requiresData,
  wellsComplete
};

// all the actions used by component
const actions = {
  init,
  next,
  updateWell
};

export const mapDispatchToProps = createMapDispatchToProps(actions);

export const mapStateToProps = createMapStateToProps(data);

export const propTypes = createPropTypes(data, actions);

export const defaultProps = createDefaultProps(data, actions);

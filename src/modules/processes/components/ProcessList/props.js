import {
  createMapStateToProps,
  createMapDispatchToProps,
  createPropTypes,
  createDefaultProps
} from "../../../../utils/props";

import { getProcesses } from "./selectors";
import { init } from "./actions";

// all the props (excluding actions)
const data = {
  processes: getProcesses
};

// all the actions used by component
const actions = {
  init
};

export const mapDispatchToProps = createMapDispatchToProps(actions);

export const mapStateToProps = createMapStateToProps(data);

export const propTypes = createPropTypes(data, actions);

export const defaultProps = createDefaultProps(data, actions);

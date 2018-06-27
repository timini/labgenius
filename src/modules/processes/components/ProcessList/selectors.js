import { path, compose } from "ramda";
import PropTypes from "prop-types";

import { PATH } from "./constants";

export const getModel = path(PATH);

export const getProcesses = compose(path(["data", "processes"]), getModel);
getProcesses.propType = PropTypes.array.isRequired;
getProcesses.defaultProp = [];

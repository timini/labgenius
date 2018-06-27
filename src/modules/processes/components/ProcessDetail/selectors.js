import PropTypes from "prop-types";
import { path, compose, any, none, isNil } from "ramda";
import { createSelector } from "reselect";

import { PATH } from "./constants";

export const getModel = path(PATH);

export const getId = compose(path(["data", "id"]), getModel);
getId.propType = PropTypes.string.isRequired;
getId.defaultProp = "";

export const getProcess = compose(path(["data", "process"]), getModel);
getProcess.propType = PropTypes.object.isRequired;
getProcess.defaultProp = {};

export const getStatus = compose(path(["data", "status"]), getModel);
getStatus.propType = PropTypes.string.isRequired;
getStatus.defaultProp = "";

export const isLoading = compose(path(["ui", "loading"]), getModel);
isLoading.propType = PropTypes.bool.isRequired;
isLoading.defaultProp = true;

export const requiresData = createSelector(
  getProcess,
  getStatus,
  ({ states = [] }, status) =>
    (states.find(({ name }) => name === status) || {})["data"]
);
requiresData.propType = PropTypes.bool.isRequired;
requiresData.defaultProp = false;

export const wellsComplete = createSelector(
  compose(path(["data", "wells"]), getModel),
  wells => none(isNil, Object.values(wells))
);
wellsComplete.propType = PropTypes.bool.isRequired;
wellsComplete.defaultProp = false;

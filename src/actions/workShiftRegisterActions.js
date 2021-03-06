import * as workShiftRegisterApi from '../apis/workShiftRegisterApi';
import * as type from '../constants/actionTypes';

export function loadWorkShift(baseId, genId, token) {
  return function(dispatch) {
    dispatch(beginLoadWorkShiftData());
    workShiftRegisterApi
      .loadWorkShift(baseId, genId, token)
      .then(function(res) {
        dispatch(loadWorkShiftDataSuccessful(res));
      })
      .catch(error => {
        dispatch(loadWorkShiftDataError(error));
        throw error;
      });
  };
}

export function selectedBaseId(baseId) {
  return {
    type: type.SELECTED_BASE_ID_WORK_SHIFT_REGISTER,
    selectedBaseId: baseId,
  };
}

export function selectedGenId(genId) {
  return {
    type: type.SELECTED_GEN_ID_WORK_SHIFT_REGISTER,
    selectedGenId: genId,
  };
}

export function beginLoadWorkShiftData() {
  return {
    type: type.BEGIN_LOAD_WORK_SHIFT_DATA,
    isLoading: true,
    error: false,
  };
}

export function loadWorkShiftDataSuccessful(res) {
  return {
    type: type.LOAD_WORK_SHIFT_DATA_SUCCESSFUL,
    workShiftRegisterData: res.data.data,
    isLoading: false,
    error: false,
  };
}

export function loadWorkShiftDataError(error) {
  return {
    type: type.LOAD_WORK_SHIFT_DATA_ERROR,
    isLoading: false,
    error: true,
  };
}

export function register(workShiftId, token) {
  return function(dispatch) {
    dispatch(beginWorkShiftRegister(workShiftId));
    workShiftRegisterApi
      .registerWorkShift(workShiftId, token)
      .then(function(res) {
        dispatch(
          registering(
            JSON.stringify({
              id: workShiftId,
              user: res.data.data.user,
            }),
          ),
        );
        dispatch(workShiftRegisterSuccessful(workShiftId));
      })
      .catch(error => {
        dispatch(workShiftRegisterError(workShiftId));
        throw error;
      });
  };
}

export function beginWorkShiftRegister(workShiftId) {
  return {
    type: type.BEGIN_WORK_SHIFT_REGISTER,
    workShiftId: workShiftId,
    isRegistering: true,
    errorRegistering: false,
  };
}

export function workShiftRegisterSuccessful(workShiftId) {
  return {
    type: type.WORK_SHIFT_REGISTER_SUCCESSFUL,
    workShiftId: workShiftId,
    isRegistering: false,
    errorRegistering: false,
  };
}

export function registering(shift) {
  return {
    type: type.WORK_SHIFT_REGISTERING,
    shift: JSON.parse(shift),
  };
}

export function workShiftRegisterError(workShiftId) {
  return {
    type: type.WORK_SHIFT_REGISTER_ERROR,
    workShiftId: workShiftId,
    isRegistering: false,
    errorRegistering: true,
  };
}

export function beginWorkShiftUnregister(workShiftId) {
  return {
    type: type.BEGIN_WORK_SHIFT_UNREGISTER,
    workShiftId: workShiftId,
    isUnregistering: true,
    errorUnregistering: false,
  };
}

export function workShiftUnregisterSuccessful(workShiftId) {
  return {
    type: type.WORK_SHIFT_UNREGISTER_SUCCESSFUL,
    workShiftId: workShiftId,
    isUnregistering: false,
    errorUnregistering: false,
  };
}

export function unregistering(shift) {
  return {
    type: type.WORK_SHIFT_UNREGISTERING,
    shift: JSON.parse(shift),
  };
}

export function workShiftUnregisterError(workShiftId) {
  return {
    type: type.WORK_SHIFT_UNREGISTER_ERROR,
    workShiftId: workShiftId,
    isUnregistering: false,
    errorUnregistering: false,
  };
}

export function unregister(workShiftId, token) {
  return function(dispatch) {
    dispatch(beginWorkShiftUnregister(workShiftId));
    workShiftRegisterApi
      .removeWorkShift(workShiftId, token)
      .then(function(res) {
        dispatch(
          unregistering(
            JSON.stringify({
              id: workShiftId,
              user: res.data.data.user,
            }),
          ),
        );
        dispatch(workShiftUnregisterSuccessful(workShiftId));
      })
      .catch(error => {
        dispatch(workShiftUnregisterError(workShiftId));
        throw error;
      });
  };
}

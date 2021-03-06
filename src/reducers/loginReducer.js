/**
 * Created by phanmduong on 4/5/17.
 */
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.UPDATE_DATA_LOGIN_FORM:
      return {
        ...initialState.login,
        ...{
          login: action.login,
        },
      };
    case types.BEGIN_LOGIN:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error,
        token: action.token,
      });
    case types.LOGIN_USER:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error,
        user: action.user,
        token: action.token,
        isCheckIn: action.isCheckIn,
        deviceUser: action.deviceUser,
      });
    case types.LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error,
        token: action.token,
      });
    case types.GOT_DATA_LOGIN:
      return Object.assign({}, initialState.login, {
        login: action.login,
        isGetDataLocalSuccessful: action.isGetDataLocalSuccessful,
      });
    default:
      return state;
  }
}

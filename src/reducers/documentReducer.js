import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function documentReducer(
  state = initialState.document,
  actions,
) {
  switch (actions.type) {
    case types.BEGIN_LOAD_DOCUMENTS:
      return Object.assign({}, state, {
        isLoadingDoc: actions.isLoadingDoc,
        errorDoc: actions.errorDoc,
      });
    case types.BEGIN_REFRESH_DOCUMENTS:
      return Object.assign({}, state, {
        refreshingDoc: actions.refreshingDoc,
        errorDoc: actions.errorDoc,
      });
    case types.LOAD_DOCUMENTS_SUCCESSFUL:
      return Object.assign({}, state, {
        isLoadingDoc: actions.isLoadingDoc,
        refreshingDoc: actions.refreshingDoc,
        errorDoc: actions.errorDoc,
        documents: actions.documents,
      });
    case types.LOAD_DOCUMENTS_ERROR:
      return Object.assign({}, state, {
        isLoadingDoc: actions.isLoadingDoc,
        refreshingDoc: actions.refreshingDoc,
        errorDoc: actions.errorDoc,
      });
    case types.BEGIN_LOAD_DEPARTMENT_FILTER:
      return Object.assign({}, state, {
        isLoadingDepartments: actions.isLoadingDepartments,
        errorDepartments: actions.errorDepartments,
      });
    case types.LOAD_DEPARTMENT_FILTER_SUCCESSFUL:
      return Object.assign({}, state, {
        isLoadingDepartments: actions.isLoadingDepartments,
        errorDepartments: actions.errorDepartments,
        departments: actions.departments,
      });
    case types.LOAD_DEPARTMENT_FILTER_ERROR:
      return Object.assign({}, state, {
        isLoadingDepartments: actions.isLoadingDepartments,
        errorDepartments: actions.errorDepartments,
      });
    default:
      return state;
  }
}

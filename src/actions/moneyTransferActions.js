/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../constants/actionTypes';
import * as moneyTransferApi from '../apis/moneyTransferApi';
import axios from 'axios';
let CancelToken = axios.CancelToken;
let sourceCancel = CancelToken.source();

export function beginDataStaffListLoad() {
    return {
        type: types.BEGIN_DATA_STAFF_OF_MONEY_TRANSFER_LOAD,
        isLoadingStaffList: true,
        errorStaffList: false,
    }
}

export function loadDataStaffList(token, page, search) {
    return function (dispatch) {
        dispatch(beginDataStaffListLoad());
        moneyTransferApi.searchStaffApi(token, search, page, sourceCancel).then(function (res) {
            dispatch(loadDataStaffSuccessful(res));
        }).catch(error => {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            } else {
                dispatch(loadDataStaffError());
                throw (error);
            }

        })
    }
}

export function loadDataStaffSuccessful(res) {
    return ({
        type: types.LOAD_DATA_STAFF_OF_MONEY_TRANSFER_SUCCESSFUL,
        staffListData: res.data.data,
        currentPageStaffList: res.data.paginator.current_page,
        totalPageStaffList: res.data.paginator.total_pages,
        isLoadingStaffList: false,
        errorStaffList: false,
    })
}

export function loadDataStaffError() {
    return {
        type: types.LOAD_DATA_STAFF_OF_MONEY_TRANSFER_ERROR,
        isLoadingStaffList: false,
        errorStaffList: true
    }
}

export function updateFormAndLoadDataSearchStaff(search, token) {
    sourceCancel.cancel('Canceled by api register list ().');
    sourceCancel = CancelToken.source();
    return (dispatch) => {
        dispatch(updateFormSearchStaff(search));
        dispatch(loadDataStaffList(token, 1, search));
    }

}

export function updateFormSearchStaff(search) {
    return {
        type: types.UPDATE_FORM_SEARCH_STAFF_LIST,
        searchStaff: search,
        currentPageStaffList: 1,
        totalPageStaffList: 1,
        staffListData: []
    }
}

export function changeSegmentMoneyTransfer(segment) {
    return {
        type: types.CHANGE_SEGMENT_MONEY_TRANSFER,
        segment: segment
    }
}

export function beginDataHistoryTransactionLoad() {
    return {
        type: types.BEGIN_DATA_HISTORY_TRANSACTION_LOAD,
        isLoadingHistoryTransaction: true,
        errorHistoryTransaction: false,
    }
}

export function loadDataHistoryTransaction(token, page) {
    return function (dispatch) {
        dispatch(beginDataHistoryTransactionLoad());
        moneyTransferApi.transactionApi(token, page).then(function (res) {
            dispatch(loadDataHistoryTransactionSuccessful(res));
        }).catch(error => {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            } else {
                dispatch(loadDataHistoryTransactionError());
                throw (error);
            }

        })
    }
}

export function loadDataHistoryTransactionSuccessful(res) {
    return ({
        type: types.LOAD_DATA_HISTORY_TRANSACTION_SUCCESSFUL,
        transactionListData: res.data.data,
        currentPageHistoryTransaction: res.data.paginator.current_page,
        totalPageHistoryTransaction: res.data.paginator.total_pages,
        isLoadingHistoryTransaction: false,
        errorHistoryTransaction: false,
    })
}

export function loadDataHistoryTransactionError() {
    return {
        type: types.LOAD_DATA_HISTORY_TRANSACTION_ERROR,
        isLoadingHistoryTransaction: false,
        errorHistoryTransaction: true
    }
}
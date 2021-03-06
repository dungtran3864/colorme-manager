import * as types from '../constants/actionTypes';
import * as leadsApi from '../apis/leadsApi';

export function getLeads(
  refreshing,
  page,
  search,
  start_time,
  end_time,
  carer_id,
  leadStatusId,
  rate,
  top,
  address,
  orderBy,
  orderByType,
  source_id,
  campaign_id,
  token,
) {
  return function(dispatch) {
    if (!refreshing) {
      dispatch(beginLoadLeads());
    } else {
      dispatch(beginRefreshLeads());
    }
    leadsApi
      .getLeads(
        page,
        search,
        start_time,
        end_time,
        carer_id,
        leadStatusId,
        rate,
        top,
        address,
        orderBy,
        orderByType,
        source_id,
        campaign_id,
        token,
      )
      .then(function(res) {
        dispatch(loadLeadsSuccessful(res));
      })
      .catch(error => {
        dispatch(loadLeadsError());
        throw error;
      });
  };
}

function beginLoadLeads() {
  return {
    type: types.BEGIN_LOAD_LEADS,
    isLoadingLeads: true,
    errorLeads: false,
  };
}

function beginRefreshLeads() {
  return {
    type: types.BEGIN_REFRESH_LEADS,
    refreshingLeads: true,
    errorLeads: false,
  };
}

function loadLeadsSuccessful(res) {
  return {
    type: types.LOAD_LEADS_SUCCESSFUL,
    isLoadingLeads: false,
    errorLeads: false,
    leads: res.data.leads,
    currentPageLeads: res.data.paginator.current_page,
    totalPageLeads: res.data.paginator.total_pages,
    refreshingLeads: false,
  };
}

function loadLeadsError() {
  return {
    type: types.LOAD_LEADS_ERROR,
    isLoadingLeads: false,
    errorLeads: false,
    refreshingLeads: false,
  };
}

export function searchLeads(
  search,
  start_time,
  end_time,
  carer_id,
  leadStatusId,
  rate,
  top,
  address,
  orderBy,
  orderByType,
  source_id,
  campaign_id,
  token,
) {
  return function(dispatch) {
    dispatch(beginSearchLeads(search));
    dispatch(
      getLeads(
        false,
        1,
        search,
        start_time,
        end_time,
        carer_id,
        leadStatusId,
        rate,
        top,
        address,
        orderBy,
        orderByType,
        source_id,
        campaign_id,
        token,
      ),
    );
  };
}

export function refreshLeads(
  search,
  start_time,
  end_time,
  carer_id,
  leadStatusId,
  rate,
  top,
  address,
  orderBy,
  orderByType,
  source_id,
  campaign_id,
  token,
) {
  return function(dispatch) {
    dispatch(beginSearchLeads(search));
    dispatch(
      getLeads(
        true,
        1,
        search,
        start_time,
        end_time,
        carer_id,
        leadStatusId,
        rate,
        top,
        address,
        orderBy,
        orderByType,
        source_id,
        campaign_id,
        token,
      ),
    );
  };
}

function beginSearchLeads(search) {
  return {
    type: types.BEGIN_SEARCH_LEADS,
    searchLeads: search,
    currentPageLeads: 1,
    totalPageLeads: 1,
    leads: [],
  };
}

export function onSelectStartTimeLeads(startTime) {
  return {
    type: types.ON_SELECT_START_TIME_LEADS,
    start_time: startTime,
  };
}

export function onSelectEndTimeLeads(endTime) {
  return {
    type: types.ON_SELECT_END_TIME_LEADS,
    end_time: endTime,
  };
}

export function onSelectRateLeads(rate) {
  return {
    type: types.ON_SELECT_RATE_LEADS,
    rate: rate,
  };
}

export function onSelectCampaignLeads(campaign_id) {
  return {
    type: types.ON_SELECT_CAMPAIGN_LEADS,
    campaign_id: campaign_id,
  };
}

export function onSelectStatusLeads(leadStatusId) {
  return {
    type: types.ON_SELECT_STATUS_LEADS,
    leadStatusId: leadStatusId,
  };
}

export function onSelectSourceLeads(source_id) {
  return {
    type: types.ON_SELECT_SOURCE_LEADS,
    source_id: source_id,
  };
}

export function onSelectAddressLeads(address) {
  return {
    type: types.ON_SELECT_ADDRESS_LEADS,
    address: address,
  };
}

export function onSelectCarerLeads(carer_id) {
  return {
    type: types.ON_SELECT_CARER_LEADS,
    carer_id: carer_id,
  };
}

export function reset() {
  return {
    type: types.RESET_FILTER_LEADS,
    start_time: '',
    end_time: '',
    address: '',
    leadStatusId: -1,
    rate: -1,
    source_id: -1,
    campaign_id: -1,
  };
}

export function getStaff(search, token) {
  return function(dispatch) {
    dispatch(beginLoadStaff());
    leadsApi
      .getStaff(search, token)
      .then(function(res) {
        dispatch(loadStaffSuccessful(res));
      })
      .catch(error => {
        dispatch(loadStaffError());
        throw error;
      });
  };
}

function beginLoadStaff() {
  return {
    type: types.BEGIN_LOAD_STAFFS,
    isLoadingStaff: true,
    errorStaff: false,
  };
}

function loadStaffSuccessful(res) {
  return {
    type: types.LOAD_STAFFS_SUCCESSFUL,
    staff: res.data.staffs,
    isLoadingStaff: false,
    errorStaff: false,
  };
}

function loadStaffError() {
  return {
    type: types.LOAD_STAFFS_ERROR,
    isLoadingStaff: false,
    errorStaff: true,
  };
}

export function saveLead(lead, token) {
  return function(dispatch) {
    dispatch(beginSaveLead());
    leadsApi
      .saveLead(lead, token)
      .then(function(res) {
        dispatch(saveLeadSuccessful(res));
      })
      .catch(error => {
        dispatch(saveLeadError());
        throw error;
      });
  };
}

function beginSaveLead() {
  return {
    type: types.BEGIN_SAVE_LEAD,
    isSavingLead: true,
    errorSaveLead: false,
  };
}

function saveLeadSuccessful(res) {
  return {
    type: types.SAVE_LEAD_SUCCESSFUL,
    isSavingLead: false,
    errorSaveLead: false,
  };
}

function saveLeadError() {
  return {
    type: types.SAVE_LEAD_ERROR,
    isSavingLead: false,
    errorSaveLead: true,
  };
}

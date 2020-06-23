import axios from 'axios';
import * as env from '../constants/env';

export function loadWorkShift(baseId, genId, token) {
  let url =
    env.MANAGE_API_URL +
    '/work-shift/current-shifts?base_id=' +
    baseId +
    '&gen_id=' +
    genId +
    '&token=' +
    token;
  return axios.get(url);
}

export function registerWorkShift(workShiftId, token) {
  let url =
    env.MANAGE_API_URL +
    '/work-shift/register-shift/' +
    workShiftId +
    '?token=' +
    token;
  return axios.put(url);
}

export function removeWorkShift(workShiftId, token) {
  let url =
    env.MANAGE_API_URL +
    '/work-shift/remove-register-shift/' +
    workShiftId +
    '?token=' +
    token;
  return axios.put(url);
}

import axios from 'axios';
import * as env from '../constants/env';

export function saveRegisterApi(token, register) {
  let url = env.MANAGE_API_URL + '/v2/register?token=' + token;
  return axios.post(url, {
    name: register.name,
    phone: register.phone,
    email: register.email,
    class_id: register.class_id,
    coupon: register.coupon,
    dob: register.dob,
    address: register.address,
    facebook: register.facebook,
    gender: register.gender,
    how_know: register.how_know,
    university: register.university,
    work: register.work,
    campaign_id: register.campaign_id,
    description: register.description,
  });
}

export function loadCoursesApi(token) {
  let url = env.API_URL + '/paid-courses?token=' + token;
  return axios.get(url);
}

export function loadClassesApi(token, course_id) {
  let url =
    env.MANAGE_API_URL + '/v2/course/' + course_id + '/class?token=' + token;
  return axios.get(url);
}

export function loadCampaigns(token) {
  let url =
    env.MANAGE_API_URL + '/marketing-campaign/all?limit=34&token=' + token;
  return axios.get(url);
}

export function loadProvinces(token) {
  let url = env.MANAGE_API_URL + '/province/all?token=' + token;
  return axios.get(url);
}

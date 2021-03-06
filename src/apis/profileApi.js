import axios from 'axios';
import * as env from '../constants/env';

export function loadProfile(token) {
  let url = env.MANAGE_API_URL + '/profile?token=' + token;
  return axios.get(url);
}

export function updateProfile(profile, token) {
  let url = env.MANAGE_API_URL_V3 + '/edit-profile?token=' + token;
  return axios.post(url, {
    name: profile.name,
    email: profile.email,
    username: profile.username,
    marital: profile.marital,
    homeland: profile.homeland,
    literacy: profile.literacy,
    start_company: profile.start_company,
    age: profile.age,
    address: profile.address,
    phone: profile.phone,
    color: profile.color,
  });
}

export function changeAvatar(id, file, token) {
  let url = env.MANAGE_API_URL + '/change-avatar?token=' + token;
  let formData = new FormData();
  formData.append('id', id);
  formData.append('avatar', {
    uri: file,
    type: 'image/jpeg',
    name: 'avatar',
  });
  return axios({
    method: 'post',
    url: url,
    data: formData,
  });
}

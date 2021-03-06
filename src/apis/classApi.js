/**
 * Created by phanmduong on 4/6/17.
 */
import axios from 'axios';
import * as env from '../constants/env';

export function loadClassApi(
  search,
  teacherId,
  courseId,
  page,
  genId,
  baseId,
  token,
) {
  let url = env.MANAGE_API_URL_V3 + '/class/all?token=' + token;
  return axios.get(url, {
    search: search,
    teacher_id: teacherId,
    course_id: courseId,
    page: page,
    gen_id: genId,
    base_id: baseId,
  });
}

export function loadCourseApi(token) {
  let url = env.API_URL + '/paid-courses?token=' + token;
  return axios.get(url);
}

export function loadCurrentClassStudyApi(date, token) {
  let url =
    env.BASE_URL +
    '/manageapi/v4/class/by-date-teaching?date=' +
    date +
    '&include=class_lesson.analytics_attendance,class_lesson.lesson,base.district.province,room,course,teacher,teacher_assistant,schedule&token=' +
    token;
  console.log(url);
  return axios.get(url);
}

export function loadBaseData(token) {
  let url =
    env.BASE_URL +
    '/manageapi/v4/base/all?include=district.province&token=' +
    token;
  return axios.get(url);
}

export function infoCreateClass(token) {
  let url = env.MANAGE_API_URL + '/class/info-create-class?token=' + token;
  return axios.get(url);
}

export function addClass(classData, token) {
  let url = env.MANAGE_API_URL + '/class/store-class?token=' + token;
  return axios.post(url, {
    id: classData.id,
    datestart: classData.datestart,
    name: classData.name,
    schedule_id: classData.schedule_id,
    room_id: classData.room_id,
    description: classData.description,
    link_drive: classData.link_drive,
    gen_id: classData.gen_id,
    target: classData.target,
    regis_target: classData.regis_target,
    course_id: classData.course_id,
    teaching_assistant_id: classData.teaching_assistant_id,
    teacher_id: classData.teacher_id,
    study_time: classData.study_time,
    type: classData.type,
    status: classData.status,
    teachers: classData.teachers,
    teaching_assistants: classData.teaching_assistants,
    enroll_start_date: classData.enroll_start_date,
    enroll_end_date: classData.enroll_end_date,
    date_end: classData.date_end,
  });
}

export function loadClassInfo(classId, token) {
  let url = env.MANAGE_API_URL_V3 + '/class/' + classId + '?token=' + token;
  console.log(url);
  return axios.get(url);
}

export function changeClassStatus(classId, token) {
  let url = env.MANAGE_API_URL + '/class/change-status?token=' + token;
  return axios.post(url, {
    class_id: classId,
  });
}

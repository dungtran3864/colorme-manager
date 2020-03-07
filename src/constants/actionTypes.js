/**
 * Created by phanmduong on 4/5/17.
 */
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHANGE_STATUSBAR_COLOR = 'CHANGE_STATUSBAR_COLOR';

export const UPDATE_DATA_LOGIN_FORM = 'UPDATE_DATA_LOGIN_FORM';
export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const GOT_DATA_LOGIN = 'GOT_DATA_LOGIN';
export const SET_AUTO_LOGIN = 'SET_AUTO_LOGIN';

export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const DISABLE_DRAWER = 'DISABLE_DRAWER';
export const ENABLE_DRAWER = 'ENABLE_DRAWER';

export const BEGIN_DATA_BASE_LOAD = 'BEGIN_DATA_BASE_LOAD';
export const LOAD_DATA_BASE_SUCCESSFUL = 'LOAD_DATA_BASE_SUCCESSFUL';
export const LOAD_DATA_BASE_ERROR = 'LOAD_DATA_BASE_ERROR';
export const SELECTED_BASE_ID = 'SELECTED_BASE_ID';

export const BEGIN_DATA_COURSE_LOAD = 'BEGIN_DATA_COURSE_LOAD';
export const LOAD_DATA_COURSE_SUCCESSFUL = 'LOAD_DATA_COURSE_SUCCESSFUL';
export const LOAD_DATA_COURSE_ERROR = 'LOAD_DATA_COURSE_ERROR';
export const SELECTED_COURSE_ID = 'SELECTED_COURSE_ID';

export const BEGIN_DATA_GEN_LOAD = 'BEGIN_DATA_GEN_LOAD';
export const LOAD_DATA_GEN_SUCCESSFUL = 'LOAD_DATA_GEN_SUCCESSFUL';
export const LOAD_DATA_GEN_ERROR = 'LOAD_DATA_GEN_ERROR';
export const SELECTED_GEN_ID = 'SELECTED_GEN_ID';

export const BEGIN_DATA_LESSON_COURSE_LOAD = 'BEGIN_DATA_LESSON_COURSE_LOAD';
export const LOAD_DATA_LESSON_COURSE_SUCCESSFUL =
  'LOAD_DATA_LESSON_COURSE_SUCCESSFUL';
export const LOAD_DATA_LESSON_COURSE_ERROR = 'LOAD_DATA_LESSON_COURSE_ERROR';
export const SELECTED_LESSON_COURSE_ID = 'SELECTED_LESSON_COURSE_ID';

export const BEGIN_DATA_CLASS_LOAD = 'BEGIN_DATA_CLASS_LOAD';
export const LOAD_DATA_CLASS_SUCCESSFUL = 'LOAD_DATA_CLASS_SUCCESSFUL';
export const LOAD_DATA_CLASS_ERROR = 'LOAD_DATA_CLASS_ERROR';
export const BEGIN_DATA_CLASS_REFRESH = 'BEGIN_DATA_CLASS_REFRESH';
export const REFRESH_DATA_CLASS_SUCCESSFUL = 'REFRESH_DATA_CLASS_SUCCESSFUL';
export const REFRESH_DATA_CLASS_ERROR = 'REFRESH_DATA_CLASS_ERROR';
export const BEGIN_DATA_COURSES_LOAD = 'BEGIN_DATA_COURSES_LOAD';
export const LOAD_DATA_COURSES_SUCCESSFUL = 'LOAD_DATA_COURSES_SUCCESSFUL';
export const LOAD_DATA_COURSES_ERROR = 'LOAD_DATA_COURSES_ERROR';
export const SELECTED_CLASS_ID = 'SELECTED_CLASS_ID';
export const BEGIN_LOAD_BASE = 'BEGIN_LOAD_BASE';
export const LOAD_BASE_SUCCESSFUL = 'LOAD_BASE_SUCCESSFUL';
export const LOAD_BASE_ERROR = 'LOAD_BASE_ERROR';
export const BEGIN_LOAD_INFO_CREATE_CLASS = 'BEGIN_LOAD_INFO_CREATE_CLASS';
export const LOAD_INFO_CREATE_CLASS_SUCCESSFUL =
  'LOAD_INFO_CREATE_CLASS_SUCCESSFUL';
export const LOAD_INFO_CREATE_CLASS_ERROR = 'LOAD_INFO_CREATE_CLASS_ERROR';
export const BEGIN_ADD_CLASS = 'BEGIN_ADD_CLASS';
export const ADD_CLASS_SUCCESSFUL = 'ADD_CLASS_SUCCESSFUL';
export const ADD_CLASS_ERROR = 'ADD_CLASS_ERROR';
export const BEGIN_LOAD_CLASS_INFO = 'BEGIN_LOAD_CLASS_INFO';
export const LOAD_CLASS_INFO_SUCCESSFUL = 'LOAD_CLASS_INFO_SUCCESSFUL';
export const LOAD_CLASS_INFO_ERROR = 'LOAD_CLASS_INFO_ERROR';
export const BEGIN_CHANGE_CLASS_STATUS = 'BEGIN_CHANGE_CLASS_STATUS';
export const CHANGE_CLASS_STATUS_SUCCESSFUL = '';
export const CHANGE_CLASS_STATUS_ERROR = '';

export const BEGIN_DATA_CURRENT_CLASS_STUDY_LOAD =
  'BEGIN_DATA_CURRENT_CLASS_STUDY_LOAD';
export const BEGIN_DATA_CURRENT_CLASS_STUDY_REFRESH =
  'BEGIN_DATA_CURRENT_CLASS_STUDY_REFRESH';
export const LOAD_DATA_CURRENT_CLASS_STUDY_SUCCESSFUL =
  'LOAD_DATA_CURRENT_CLASS_STUDY_SUCCESSFUL';
export const LOAD_DATA_CURRENT_CLASS_STUDY_ERROR =
  'LOAD_DATA_CURRENT_CLASS_STUDY_ERROR';
export const SELECTED_CURRENT_CLASS_STUDY = 'SELECTED_CURRENT_CLASS_STUDY';
export const ON_SELECT_CLASS_DATE = 'ON_SELECT_CLASS_DATE';

export const BEGIN_SCAN_QR_CODE = 'BEGIN_SCAN_QR_CODE';
export const SCANNED_QR_CODE = 'SCANNED_QR_CODE';
export const IS_SCANNED_QR_CODE = 'IS_SCANNED_QR_CODE';

export const BEGIN_GET_INFOR_STUDENT = 'BEGIN_GET_INFOR_STUDENT';
export const LOAD_GET_INFOR_STUDENT_SUCCESSFUL =
  'LOAD_GET_INFOR_STUDENT_SUCCESSFUL';
export const LOAD_GET_INFOR_STUDENT_ERROR = 'LOAD_GET_INFOR_STUDENT_ERROR';
export const BEGIN_POST_ATTENDANCE_STUDENT = 'BEGIN_POST_ATTENDANCE_STUDENT';
export const LOAD_POST_ATTENDANCE_STUDENT_SUCCESSFUL =
  'LOAD_POST_ATTENDANCE_STUDENT_SUCCESSFUL';
export const LOAD_POST_ATTENDANCE_STUDENT_ERROR =
  'LOAD_POST_ATTENDANCE_STUDENT_ERROR';
export const BEGIN_UNBLOCK_STUDENT = 'BEGIN_UNBLOCK_STUDENT';
export const LOAD_UNBLOCKING_STUDENT = 'LOAD_UNBLOCKING_STUDENT';
export const ERROR_UNBLOCKING_STUDENT = 'ERROR_UNBLOCKING_STUDENT';
export const BEGIN_UPLOAD_IMAGE_STUDENT = 'BEGIN_UPLOAD_IMAGE_STUDENT';
export const UPLOAD_IMAGE_STUDENT = 'UPLOAD_IMAGE_STUDENT';

export const HISTORY_TEACHING_TAB = 'HISTORY_TEACHING_TAB';
export const HISTORY_WORK_SHIFT_TAB = 'HISTORY_WORK_SHIFT_TAB';
export const HISTORY_SHIFT_TAB = 'HISTORY_SHIFT_TAB';

export const BEGIN_DATA_SHIFT_REGISTER_LOAD = 'BEGIN_DATA_SHIFT_REGISTER_LOAD';
export const LOAD_DATA_SHIFT_REGISTER_SUCCESSFUL =
  'LOAD_DATA_SHIFT_REGISTER_SUCCESSFUL';
export const LOAD_DATA_SHIFT_REGISTER_ERROR = 'LOAD_DATA_SHIFT_REGISTER_ERROR';
export const POST_SHIFT_REGISTER = 'POST_SHIFT_REGISTER';
export const SHIFT_REGISTER_SUCCESSFUL = 'SHIFT_REGISTER_SUCCESSFUL';
export const SHIFT_REGISTER_ERROR = 'SHIFT_REGISTER_ERROR';
export const POST_SHIFT_UNREGISTER = 'POST_SHIFT_UNREGISTER';
export const SHIFT_UNREGISTER_SUCCESSFUL = 'SHIFT_UNREGISTER_SUCCESSFUL';
export const SHIFT_UNREGISTER_ERROR = 'SHIFT_UNREGISTER_ERROR';
export const SELECTED_BASE_ID_SHIFT_REGISTER =
  'SELECTED_BASE_ID_SHIFT_REGISTER';
export const SELECTED_GEN_ID_SHIFT_REGISTER = 'SELECTED_GEN_ID_SHIFT_REGISTER';
export const UPDATE_DATA_SHIFT_REGISTER = 'UPDATE_DATA_SHIFT_REGISTER';

export const BEGIN_DATA_ANALYTICS_LOAD = 'BEGIN_DATA_ANALYTICS_LOAD';
export const LOAD_DATA_ANALYTICS_SUCCESSFUL = 'LOAD_DATA_ANALYTICS_SUCCESSFUL';
export const LOAD_DATA_ANALYTICS_ERROR = 'LOAD_DATA_ANALYTICS_ERROR';
export const SELECTED_BASE_ID_ANALYTICS = 'SELECTED_BASE_ID_ANALYTICS';
export const SELECTED_GEN_ID_ANALYTICS = 'SELECTED_GEN_ID_ANALYTICS';

export const BEGIN_DATA_LIST_STUDENT_CLASS_LOAD =
  'BEGIN_DATA_LIST_STUDENT_CLASS_LOAD';
export const BEGIN_DATA_LIST_STUDENT_CLASS_REFRESH =
  'BEGIN_DATA_LIST_STUDENT_CLASS_REFRESH';
export const LOAD_DATA_LIST_STUDENT_CLASS_SUCCESSFUL =
  'LOAD_DATA_LIST_STUDENT_CLASS_SUCCESSFUL';
export const LOAD_DATA_LIST_STUDENT_CLASS_ERROR =
  'LOAD_DATA_LIST_STUDENT_CLASS_ERROR';

export const BEGIN_DATA_REGISTER_LIST_LOAD_MY =
  'BEGIN_DATA_REGISTER_LIST_LOAD_MY';
export const LOAD_DATA_REGISTER_LIST_SUCCESSFUL_MY =
  'LOAD_DATA_REGISTER_LIST_SUCCESSFUL_MY';
export const LOAD_DATA_REGISTER_LIST_ERROR_MY =
  'LOAD_DATA_REGISTER_LIST_ERROR_MY';
export const UPDATE_FORM_SEARCH_REGISTER_LIST_MY =
  'UPDATE_FORM_SEARCH_REGISTER_LIST_MY';
export const RESET_PAGE_REGISTER_LIST_MY = 'RESET_PAGE_REGISTER_LIST_MY';
export const SELECT_REGISTER_LIST_SALER = 'SELECT_REGISTER_LIST_SALER';
export const SELECT_REGISTER_LIST_CAMPAIGN = 'SELECT_REGISTER_LIST_CAMPAIGN';
export const SELECT_REGISTER_LIST_PAID_STATUS =
  'SELECT_REGISTER_LIST_PAID_STATUS';
export const SELECT_REGISTER_LIST_CLASS_STATUS =
  'SELECT_REGISTER_LIST_CLASS_STATUS';
export const SELECT_REGISTER_LIST_CALL_STATUS =
  'SELECT_REGISTER_LIST_CALL_STATUS';
export const SELECT_REGISTER_LIST_BOOKMARK = 'SELECT_REGISTER_LIST_BOOKMARK';
export const SELECT_REGISTER_LIST_START_TIME =
  'SELECT_REGISTER_LIST_START_TIME';
export const SELECT_REGISTER_LIST_END_TIME = 'SELECT_REGISTER_LIST_END_TIME';
export const SELECT_REGISTER_LIST_APPOINTMENT_PAYMENT =
  'SELECT_REGISTER_LIST_APPOINTMENT_PAYMENT';
export const SELECT_REGISTER_LIST_SOURCE = 'SELECT_REGISTER_LIST_SOURCE';
export const SELECT_REGISTER_LIST_STATUS = 'SELECT_REGISTER_LIST_STATUS';
export const RESET_REGISTER_LIST_FILTER = 'RESET_REGISTER_LIST_FILTER';
export const SELECT_REGISTER_LIST_CLASS = 'SELECT_REGISTER_LIST_CLASS';
export const SET_AUTOFOCUS_REGISTER_LIST_SEARCH =
  'SET_AUTOFOCUS_REGISTER_LIST_SEARCH';

export const BEGIN_DATA_STUDENT_LIST_COLLECT_MONEY_LOAD =
  'BEGIN_DATA_STUDENT_LIST_COLLECT_MONEY_LOAD';
export const LOAD_DATA_STUDENT_LIST_COLLECT_MONEY_SUCCESSFUL =
  'LOAD_DATA_STUDENT_LIST_COLLECT_MONEY_SUCCESSFUL';
export const LOAD_DATA_STUDENT_LIST_COLLECT_MONEY_ERROR =
  'LOAD_DATA_STUDENT_LIST_COLLECT_MONEY_ERROR';
export const UPDATE_FORM_SEARCH_STUDENT_LIST_COLLECT_MONEY =
  'UPDATE_FORM_SEARCH_STUDENT_LIST_COLLECT_MONEY';
export const SELECTED_STUDENT_OF_STUDENT_LIST_COLLECT_MONEY =
  'SELECTED_STUDENT_OF_STUDENT_LIST_COLLECT_MONEY';
export const UPDATE_FORM_INFO_MONEY = 'UPDATE_FORM_INFO_MONEY';
export const BEGIN_UPDATE_MONEY_STUDENT_COLLECT_MONEY =
  'BEGIN_UPDATE_MONEY_STUDENT_COLLECT_MONEY';
export const UPDATE_MONEY_STUDENT_COLLECT_MONEY_SUCCESSFUL =
  'UPDATE_MONEY_STUDENT_COLLECT_MONEY_SUCCESSFUL';
export const UPDATE_MONEY_STUDENT_COLLECT_MONEY_ERROR =
  'UPDATE_MONEY_STUDENT_COLLECT_MONEY_ERROR';

export const CHANGE_SEGMENT_MONEY_TRANSFER = 'CHANGE_SEGMENT_MONEY_TRANSFER';
export const BEGIN_DATA_STAFF_OF_MONEY_TRANSFER_LOAD =
  'BEGIN_DATA_STAFF_OF_MONEY_TRANSFER_LOAD';
export const LOAD_DATA_STAFF_OF_MONEY_TRANSFER_SUCCESSFUL =
  'LOAD_DATA_STAFF_OF_MONEY_TRANSFER_SUCCESSFUL';
export const LOAD_DATA_STAFF_OF_MONEY_TRANSFER_ERROR =
  'LOAD_DATA_STAFF_OF_MONEY_TRANSFER_ERROR';
export const UPDATE_FORM_SEARCH_STAFF_LIST = 'UPDATE_FORM_SEARCH_STAFF_LIST';
export const BEGIN_DATA_HISTORY_TRANSACTION_LOAD =
  'BEGIN_DATA_HISTORY_TRANSACTION_LOAD';
export const LOAD_DATA_HISTORY_TRANSACTION_SUCCESSFUL =
  'LOAD_DATA_HISTORY_TRANSACTION_SUCCESSFUL';
export const LOAD_DATA_HISTORY_TRANSACTION_ERROR =
  'LOAD_DATA_HISTORY_TRANSACTION_ERROR';
export const BEGIN_TRANSACTION = 'BEGIN_TRANSACTION';
export const TRANSACTION_SUCCESSFUL = 'TRANSACTION_SUCCESSFUL';
export const TRANSACTION_ERROR = 'TRANSACTION_ERROR';
export const BEGIN_CONFIRM_TRANSACTION = 'BEGIN_CONFIRM_TRANSACTION';
export const CONFIRM_TRANSACTION_SUCCESSFUL = 'CONFIRM_TRANSACTION_SUCCESSFUL';
export const CONFIRM_TRANSACTION_ERROR = 'CONFIRM_TRANSACTION_ERROR';
export const CHANGE_STATUS_TRANSACTION = 'CHANGE_STATUS_TRANSACTION';
export const UPDATE_HISTORY_TRANSACTION_SOCKET =
  'UPDATE_HISTORY_TRANSACTION_SOCKET';

export const BEGIN_DATA_LIST_STUDENT_PAID_LOAD =
  'BEGIN_DATA_LIST_STUDENT_PAID_LOAD';
export const LOAD_DATA_LIST_STUDENT_PAID_SUCCESSFUL =
  'LOAD_DATA_LIST_STUDENT_PAID_SUCCESSFUL';
export const LOAD_DATA_LIST_STUDENT_PAID_ERROR =
  'LOAD_DATA_LIST_STUDENT_PAID_ERROR';

export const BEGIN_DATA_LIST_STUDENT_ZERO_LOAD =
  'BEGIN_DATA_LIST_STUDENT_ZERO_LOAD';
export const LOAD_DATA_LIST_STUDENT_ZERO_SUCCESSFUL =
  'LOAD_DATA_LIST_STUDENT_ZERO_SUCCESSFUL';
export const LOAD_DATA_LIST_STUDENT_ZERO_ERROR =
  'LOAD_DATA_LIST_STUDENT_ZERO_ERROR';

export const BEGIN_CHECK_IN = 'BEGIN_CHECK_IN';
export const CHECK_IN_SUCCESS = 'CHECK_IN_SUCCESS';
export const CHECK_IN_ERROR = 'CHECK_IN_ERROR';

export const BEGIN_DATA_LIST_STUDENT_ATTENDANCE_LOAD =
  'BEGIN_DATA_LIST_STUDENT_ATTENDANCE_LOAD';
export const LOAD_DATA_LIST_STUDENT_ATTENDANCE_SUCCESSFUL =
  'LOAD_DATA_LIST_STUDENT_ATTENDANCE_SUCCESSFUL';
export const LOAD_DATA_LIST_STUDENT_ATTENDANCE_ERROR =
  'LOAD_DATA_LIST_STUDENT_ATTENDANCE_ERROR';

export const BEGIN_LOAD_WORK_SHIFT_DATA = 'BEGIN_LOAD_WORK_SHIFT_DATA';
export const LOAD_WORK_SHIFT_DATA_SUCCESSFUL =
  'LOAD_WORK_SHIFT_DATA_SUCCESSFUL';
export const LOAD_WORK_SHIFT_DATA_ERROR = 'LOAD_WORK_SHIFT_DATA_ERROR';
export const SELECTED_BASE_ID_WORK_SHIFT_REGISTER =
  'SELECTED_BASE_ID_WORK_SHIFT_REGISTER';
export const SELECTED_GEN_ID_WORK_SHIFT_REGISTER =
  'SELECTED_GEN_ID_WORK_SHIFT_REGISTER';
export const BEGIN_WORK_SHIFT_REGISTER = 'BEGIN_WORK_SHIFT_REGISTER';
export const WORK_SHIFT_REGISTER_SUCCESSFUL = 'WORK_SHIFT_REGISTER_SUCCESSFUL';
export const WORK_SHIFT_REGISTER_ERROR = 'WORK_SHIFT_REGISTER_ERROR';
export const WORK_SHIFT_REGISTERING = 'WORK_SHIFT_REGISTERING';
export const BEGIN_WORK_SHIFT_UNREGISTER = 'BEGIN_WORK_SHIFT_UNREGISTER';
export const WORK_SHIFT_UNREGISTER_SUCCESSFUL =
  'WORK_SHIFT_UNREGISTER_SUCCESSFUL';
export const WORK_SHIFT_UNREGISTER_ERROR = 'WORK_SHIFT_UNREGISTER_ERROR';
export const WORK_SHIFT_UNREGISTERING = 'WORK_SHIFT_UNREGISTERING';

export const BEGIN_LOAD_TEACHER_RATING = 'BEGIN_LOAD_TEACHER_RATING';
export const LOAD_TEACHER_RATING_SUCCESSFUL = 'LOAD_TEACHER_RATING_SUCCESSFUL';
export const LOAD_TEACHER_RATING_ERROR = 'LOAD_TEACHER_RATING_ERROR';
export const BEGIN_LOAD_ASSISTANT_RATING = 'BEGIN_LOAD_ASSISTANT_RATING';
export const LOAD_ASSISTANT_RATING_SUCCESSFUL =
  'LOAD_ASSISTANT_RATING_SUCCESSFUL';
export const LOAD_ASSISTANT_RATING_ERROR = 'LOAD_ASSISTANT_RATING_ERROR';
export const SELECTED_GEN_ID_RATING = 'SELECTED_GEN_ID_RATING';
export const BEGIN_LOAD_TEACHER_FEEDBACK = 'BEGIN_LOAD_TEACHER_FEEDBACK';
export const LOAD_TEACHER_FEEDBACK_SUCCESSFUL =
  'LOAD_TEACHER_FEEDBACK_SUCCESSFUL';
export const LOAD_TEACHER_FEEDBACK_ERROR = 'LOAD_TEACHER_FEEDBACK_ERROR';
export const BEGIN_LOAD_ASSISTANT_FEEDBACK = 'BEGIN_LOAD_ASSISTANT_FEEDBACK';
export const LOAD_ASSISTANT_FEEDBACK_SUCCESSFUL =
  'LOAD_ASSISTANT_FEEDBACK_SUCCESSFUL';
export const LOAD_ASSISTANT_FEEDBACK_ERROR = 'LOAD_ASSISTANT_FEEDBACK_ERROR';

export const BEGIN_LOAD_TEACHER_LIST = 'BEGIN_LOAD_TEACHER_LIST';
export const LOAD_TEACHER_LIST_SUCCESSFUL = 'LOAD_TEACHER_LIST_SUCCESSFUL';
export const LOAD_TEACHER_LIST_ERROR = 'LOAD_TEACHER_LIST_ERROR';
export const BEGIN_LOAD_ASSISTANT_LIST = 'BEGIN_LOAD_ASSISTANT_LIST';
export const LOAD_ASSISTANT_LIST_SUCCESSFUL = 'LOAD_ASSISTANT_LIST_SUCCESSFUL';
export const LOAD_ASSISTANT_LIST_ERROR = 'LOAD_ASSISTANT_LIST_ERROR';
export const SELECTED_GEN_ID_TEACHING_TEAM_LIST =
  'SELECTED_GEN_ID_TEACHING_TEAM_LIST';

export const BEGIN_LOAD_TEACHER_RATING_DUPLICATE =
  'BEGIN_LOAD_TEACHER_RATING_DUPLICATE';
export const LOAD_TEACHER_RATING_SUCCESSFUL_DUPLICATE =
  'LOAD_TEACHER_RATING_SUCCESSFUL_DUPLICATE';
export const LOAD_TEACHER_RATING_ERROR_DUPLICATE =
  'LOAD_TEACHER_RATING_ERROR_DUPLICATE';
export const BEGIN_LOAD_ASSISTANT_RATING_DUPLICATE =
  'BEGIN_LOAD_ASSISTANT_RATING_DUPLICATE';
export const LOAD_ASSISTANT_RATING_SUCCESSFUL_DUPLICATE =
  'LOAD_ASSISTANT_RATING_SUCCESSFUL_DUPLICATE';
export const LOAD_ASSISTANT_RATING_ERROR_DUPLICATE =
  'LOAD_ASSISTANT_RATING_ERROR_DUPLICATE';
export const SELECTED_GEN_ID_RATING_DUPLICATE =
  'SELECTED_GEN_ID_RATING_DUPLICATE';
export const BEGIN_LOAD_TEACHER_FEEDBACK_DUPLICATE =
  'BEGIN_LOAD_TEACHER_FEEDBACK_DUPLICATE';
export const LOAD_TEACHER_FEEDBACK_SUCCESSFUL_DUPLICATE =
  'LOAD_TEACHER_FEEDBACK_SUCCESSFUL_DUPLICATE';
export const LOAD_TEACHER_FEEDBACK_ERROR_DUPLICATE =
  'LOAD_TEACHER_FEEDBACK_ERROR_DUPLICATE';
export const BEGIN_LOAD_ASSISTANT_FEEDBACK_DUPLICATE =
  'BEGIN_LOAD_ASSISTANT_FEEDBACK_DUPLICATE';
export const LOAD_ASSISTANT_FEEDBACK_SUCCESSFUL_DUPLICATE =
  'LOAD_ASSISTANT_FEEDBACK_SUCCESSFUL_DUPLICATE';
export const LOAD_ASSISTANT_FEEDBACK_ERROR_DUPLICATE =
  'LOAD_ASSISTANT_FEEDBACK_ERROR_DUPLICATE';

export const BEGIN_LOAD_DETAIL_SHIFTS = 'BEGIN_LOAD_DETAIL_SHIFTS';
export const LOAD_DETAIL_SHIFTS_SUCCESSFUL = 'LOAD_DETAIL_SHIFTS_SUCCESSFUL';
export const LOAD_DETAIL_SHIFTS_ERROR = 'LOAD_DETAIL_SHIFTS_ERROR';

export const BEGIN_LOAD_SCHEDULE_CLASSES = 'BEGIN_LOAD_SCHEDULE_CLASSES';
export const LOAD_SCHEDULE_CLASSES_SUCCESSFUL =
  'LOAD_SCHEDULE_CLASSES_SUCCESSFUL';
export const LOAD_SCHEDULE_CLASSES_ERROR = 'LOAD_SCHEDULE_CLASSES_ERROR';
export const BEGIN_LOAD_ALL_COURSES = 'BEGIN_LOAD_ALL_COURSES';
export const LOAD_ALL_COURSES_SUCCESSFUL = 'LOAD_ALL_COURSES_SUCCESSFUL';
export const LOAD_ALL_COURSES_ERROR = 'LOAD_ALL_COURSES_ERROR';
export const RESET_SCHEDULE_CLASSES = 'RESET_SCHEDULE_CLASSES';

export const BEGIN_LOAD_COURSES = 'BEGIN_LOAD_COURSES';
export const LOAD_COURSES_SUCCESSFUL = 'LOAD_COURSES_SUCCESSFUL';
export const LOAD_COURSES_ERROR = 'LOAD_COURSES_ERROR';
export const BEGIN_LOAD_REGISTER_CLASSES = 'BEGIN_LOAD_REGISTER_CLASSES';
export const LOAD_REGISTER_CLASSES_SUCCESSFUL =
  'LOAD_REGISTER_CLASSES_SUCCESSFUL';
export const LOAD_REGISTER_CLASSES_ERROR = 'LOAD_REGISTER_CLASSES_ERROR';
export const BEGIN_REGISTER_STUDENT = 'BEGIN_REGISTER_STUDENT';
export const REGISTER_STUDENT_SUCCESSFUL = 'REGISTER_STUDENT_SUCCESSFUL';
export const REGISTER_STUDENT_ERROR = 'REGISTER_STUDENT_ERROR';
export const BEGIN_LOAD_CAMPAIGNS = 'BEGIN_LOAD_CAMPAIGNS';
export const LOAD_CAMPAIGNS_SUCCESSFUL = 'LOAD_CAMPAIGNS_SUCCESSFUL';
export const LOAD_CAMPAIGNS_ERROR = 'LOAD_CAMPAIGNS_ERROR';
export const BEGIN_LOAD_PROVINCES = 'BEGIN_LOAD_PROVINCES';
export const LOAD_PROVINCES_SUCCESSFUL = 'LOAD_PROVINCES_SUCCESSFUL';
export const LOAD_PROVINCES_ERROR = 'LOAD_PROVINCES_ERROR';
export const BEGIN_LOAD_SOURCES = 'BEGIN_LOAD_SOURCES';
export const LOAD_SOURCES_SUCCESSFUL = 'LOAD_SOURCES_SUCCESSFUL';
export const LOAD_SOURCES_ERROR = 'LOAD_SOURCES_ERROR';
export const BEGIN_LOAD_STATUSES = 'BEGIN_LOAD_STATUSES';
export const LOAD_STATUSES_SUCCESSFUL = 'LOAD_STATUSES_SUCCESSFUL';
export const LOAD_STATUSES_ERROR = 'LOAD_STATUSES_ERROR';
export const BEGIN_LOAD_SALERS = 'BEGIN_LOAD_SALERS';
export const LOAD_SALERS_SUCCESSFUL = 'LOAD_SALERS_SUCCESSFUL';
export const LOAD_SALERS_ERROR = 'LOAD_SALERS_ERROR';
export const BEGIN_LOAD_FILTER_CLASSES = 'BEGIN_LOAD_FILTER_CLASSES';
export const LOAD_FILTER_CLASSES_SUCCESSFUL = 'LOAD_FILTER_CLASSES_SUCCESSFUL';
export const LOAD_FILTER_CLASSES_ERROR = 'LOAD_FILTER_CLASSES_ERROR';

export const INFO_STUDENT_SET_STUDENT_ID = 'INFO_STUDENT_SET_STUDENT_ID';
export const BEGIN_LOAD_INFO_STUDENT_REGISTERS =
  'BEGIN_LOAD_INFO_STUDENT_REGISTERS';
export const LOAD_INFO_STUDENT_REGISTERS_SUCCESSFUL =
  'LOAD_INFO_STUDENT_REGISTERS_SUCCESSFUL';
export const LOAD_INFO_STUDENT_REGISTERS_ERROR =
  'LOAD_INFO_STUDENT_REGISTERS_ERROR';

export const INFO_STUDENT_REGISTERS_TAB = 'INFO_STUDENT_REGISTERS_TAB';
export const INFO_STUDENT_HISTORY_CALLS_TAB = 'INFO_STUDENT_HISTORY_CALLS_TAB';
export const INFO_STUDENT_PROGRESS_TAB = 'INFO_STUDENT_PROGRESS_TAB';
export const INFO_STUDENT_HISTORY_COLLECT_MONEY_TAB =
  'INFO_STUDENT_HISTORY_COLLECT_MONEY_TAB';
export const BEGIN_LOAD_CHANGE_CALL_STATUS = 'BEGIN_LOAD_CHANGE_CALL_STATUS';
export const LOAD_CHANGE_CALL_STATUS_SUCCESSFUL =
  'LOAD_CHANGE_CALL_STATUS_SUCCESSFUL';
export const LOAD_CHANGE_CALL_STATUS_ERROR = 'LOAD_CHANGE_CALL_STATUS_ERROR';
export const BEGIN_LOAD_SUBMIT_MONEY = 'BEGIN_LOAD_SUBMIT_MONEY';
export const LOAD_SUBMIT_MONEY_SUCCESSFUL = 'LOAD_SUBMIT_MONEY_SUCCESSFUL';
export const LOAD_SUBMIT_MONEY_ERROR = 'LOAD_SUBMIT_MONEY_ERROR';
export const BEGIN_LOAD_STUDENT = 'BEGIN_LOAD_STUDENT';
export const LOAD_STUDENT_SUCCESSFUL = 'LOAD_STUDENT_SUCCESSFUL';
export const LOAD_STUDENT_ERROR = 'LOAD_STUDENT_ERROR';
export const BEGIN_UPLOAD_INFO_STUDENT_IMAGE =
  'BEGIN_UPLOAD_INFO_STUDENT_IMAGE';
export const UPLOADING_INFO_STUDENT_IMAGE_SUCCESSFUL =
  'UPLOADING_INFO_STUDENT_IMAGE_SUCCESSFUL';
export const UPLOADING_INFO_STUDENT_IMAGE_ERROR =
  'UPLOADING_INFO_STUDENT_IMAGE_ERROR';
export const BEGIN_UPDATING_STUDENT_PROFILE = 'BEGIN_UPDATING_STUDENT_PROFILE';
export const UPDATING_STUDENT_PROFILE_SUCCESSFUL =
  'UPDATING_STUDENT_PROFILE_SUCCESSFUL';
export const UPDATING_STUDENT_PROFILE_ERROR = 'UPDATING_STUDENT_PROFILE_ERROR';
export const BEGIN_LOAD_HISTORY_CALLS = 'BEGIN_LOAD_HISTORY_CALLS';
export const LOAD_HISTORY_CALLS_SUCCESSFUL = 'LOAD_HISTORY_CALLS_SUCCESSFUL';
export const LOAD_HISTORY_CALLS_ERROR = 'LOAD_HISTORY_CALLS_ERROR';
export const BEGIN_LOAD_HISTORY_COLLECT = 'BEGIN_LOAD_HISTORY_COLLECT';
export const LOAD_HISTORY_COLLECT_SUCCESSFUL =
  'LOAD_HISTORY_COLLECT_SUCCESSFUL';
export const LOAD_HISTORY_COLLECT_ERROR = 'LOAD_HISTORY_COLLECT_ERROR';
export const BEGIN_LOAD_INFO_STUDENT_PROGRESS =
  'BEGIN_LOAD_INFO_STUDENT_PROGRESS';
export const LOAD_INFO_STUDENT_PROGRESS_SUCCESSFUL =
  'LOAD_INFO_STUDENT_PROGRESS_SUCCESSFUL';
export const LOAD_INFO_STUDENT_PROGRESS_ERROR =
  'LOAD_INFO_STUDENT_PROGRESS_ERROR';

export const ON_SELECT_TASK_DATE = 'ON_SELECT_TASK_DATE';
export const BEGIN_LOAD_TASK_ANALYTICS = 'BEGIN_LOAD_TASK_ANALYTICS';
export const LOAD_TASK_ANALYTICS_SUCCESSFUL = 'LOAD_TASK_ANALYTICS_SUCCESSFUL';
export const LOAD_TASK_ANALYTICS_ERROR = 'LOAD_TASK_ANALYTICS_ERROR';
export const BEGIN_LOAD_TASK_VIEW = 'BEGIN_LOAD_TASK_VIEW';
export const LOAD_TASK_VIEW_SUCCESSFUL = 'LOAD_TASK_VIEW_SUCCESSFUL';
export const LOAD_TASK_VIEW_ERROR = 'LOAD_TASK_VIEW_ERROR';
export const BEGIN_LOAD_TASK_EMPLOYEES = 'BEGIN_LOAD_TASK_EMPLOYEES';
export const LOAD_TASK_EMPLOYEES_SUCCESSFUL = 'LOAD_TASK_EMPLOYEES_SUCCESSFUL';
export const LOAD_TASK_EMPLOYEES_ERROR = 'LOAD_TASK_EMPLOYEES_ERROR';

export const BEGIN_LOAD_NOTIFICATIONS = 'BEGIN_LOAD_NOTIFICATIONS';
export const LOAD_NOTIFICATIONS_SUCCESSFUL = 'LOAD_NOTIFICATIONS_SUCCESSFUL';
export const LOAD_NOTIFICATIONS_ERROR = 'LOAD_NOTIFICATIONS_ERROR';
export const BEGIN_LOAD_MORE_NOTIFICATIONS = 'BEGIN_LOAD_MORE_NOTIFICATIONS';
export const LOAD_MORE_NOTIFICATIONS_SUCCESSFUL =
  'LOAD_MORE_NOTIFICATIONS_SUCCESSFUL';
export const LOAD_MORE_NOTIFICATIONS_ERROR = 'LOAD_MORE_NOTIFICATIONS_ERROR';
export const BEGIN_REFRESH_NOTIFICATIONS = 'BEGIN_LOAD_MORE_NOTIFICATIONS';
export const REFRESH_NOTIFICATIONS_SUCCESSFUL =
  'REFRESH_NOTIFICATIONS_SUCCESSFUL';
export const REFRESH_NOTIFICATION_ERROR = 'REFRESH_NOTIFICATION_ERROR';
export const RESET_NOTIFICATIONS = 'RESET_NOTIFICATIONS';
export const BEGIN_READ_NOTIFICATIONS = 'BEGIN_READ_NOTIFICATIONS';
export const READ_NOTIFICATIONS_SUCCESSFUL = 'READ_NOTIFICATIONS_SUCCESSFUL';
export const READ_NOTIFICATIONS_ERROR = 'READ_NOTIFICATIONS_ERROR';

export const BEGIN_LOAD_PROFILE = 'BEGIN_LOAD_PROFILE';
export const LOAD_PROFILE_SUCCESSFUL = 'LOAD_PROFILE_SUCCESSFUL';
export const LOAD_PROFILE_ERROR = 'LOAD_PROFILE_ERROR';
export const BEGIN_CHANGE_AVATAR = 'BEGIN_CHANGE_AVATAR';
export const CHANGE_AVATAR_SUCCESSFUL = 'CHANGE_AVATAR_SUCCESSFUL';
export const CHANGE_AVATAR_ERROR = 'CHANGE_AVATAR_ERROR';
export const UPDATE_SYSTEM_AVATAR = 'UPDATE_SYSTEM_AVATAR';
export const BEGIN_UPDATE_PROFILE = 'BEGIN_UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESSFUL = 'UPDATE_PROFILE_SUCCESSFUL';
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';

export const BEGIN_LOAD_DOCUMENTS = 'BEGIN_LOAD_DOCUMENTS';
export const BEGIN_REFRESH_DOCUMENTS = 'BEGIN_REFRESH_DOCUMENTS';
export const LOAD_DOCUMENTS_SUCCESSFUL = 'LOAD_DOCUMENTS_SUCCESSFUL';
export const LOAD_DOCUMENTS_ERROR = 'LOAD_DOCUMENTS_ERROR';
export const BEGIN_LOAD_DEPARTMENT_FILTER = 'BEGIN_LOAD_DEPARTMENT_FILTER';
export const LOAD_DEPARTMENT_FILTER_SUCCESSFUL =
  'LOAD_DEPARTMENT_FILTER_SUCCESSFUL';
export const LOAD_DEPARTMENT_FILTER_ERROR = 'LOAD_DEPARTMENT_FILTER_ERROR';
export const ON_SELECT_DEPARTMENT_ID = 'ON_SELECTED_DEPARTMENT_ID';

/**
 * Created by phanmduong on 4/5/17.
 */
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import drawerReducer from './drawerReducer';
import baseReducer from './baseReducer';
import courseReducer from './courseReducer';
import genReducer from './genReducer';
import lessonCourseReducer from './lessonCourseReducer';
import classReducer from './classReducer';
import QRCodeReducer from './QRCodeReducer';
import attendanceStudentReducer from './attendanceStudentReducer';
import currentClassStudyReducer from './currentClassStudyReducer';
import shiftRegisterReducer from './shiftRegisterReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    drawer: drawerReducer,
    base: baseReducer,
    course: courseReducer,
    gen: genReducer,
    lessonCourse: lessonCourseReducer,
    class: classReducer,
    qrCode: QRCodeReducer,
    attendanceStudent: attendanceStudentReducer,
    currentClassStudy: currentClassStudyReducer,
    shiftRegister: shiftRegisterReducer,
});
export default rootReducer;
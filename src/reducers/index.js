/**
 * Created by phanmduong on 4/5/17.
 */
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import baseReducer from './baseReducer';
import courseReducer from './courseReducer';
import genReducer from './genReducer';
import lessonCourseReducer from './lessonCourseReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    base: baseReducer,
    course: courseReducer,
    gen: genReducer,
    lessonCourse: lessonCourseReducer,
});
export default rootReducer;
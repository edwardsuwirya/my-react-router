import {ACTION} from "../../constants";

const courseListRequest = () => {
    return {
        type: ACTION.COURSE_LIST_REQUEST
    }
}
const courseListSuccess = (courses) => {
    return {
        type: ACTION.COURSE_LIST_SUCCESS,
        payload: {
            data: courses
        }
    }
}
export const courseListError = (error) => {
    return {
        type: ACTION.COURSE_LIST_ERROR,
        payload: {
            error
        }
    }
}

export const getCourseList = (courseService) => async dispatch => {
    dispatch(courseListRequest())
    try {
        const response = await courseService();
        dispatch(courseListSuccess(response));
    } catch (e) {
        console.log(e.message)
        dispatch(courseListError({'request': e.message}));
    }
}
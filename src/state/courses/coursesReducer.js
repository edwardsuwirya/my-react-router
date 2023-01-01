import {ACTION} from "../../constants";

const coursesInitState = {
    isLoading: false, courses: [], error: null
}

export const coursesReducer = (state = coursesInitState, action) => {
    switch (action.type) {
        case ACTION.COURSE_LIST_REQUEST:
            return {courses: [], error: null, isLoading: true}
        case ACTION.COURSE_LIST_SUCCESS:
            return {
                ...state, isLoading: false, courses: action.payload.courses
            }
        case ACTION.COURSE_LIST_ERROR:
            return {isLoading: false, userInfo: null, error: action.payload.error}
        default:
            return state
    }
}

import {ACTION} from "../../constants";

const coursesInitState = {
    data: []
}

export const coursesReducer = (state = coursesInitState, action) => {
    switch (action.type) {
        case ACTION.COURSE_LIST_SUCCESS:
            return {
                ...state, data: action.payload.data
            }
        default:
            return state
    }
}

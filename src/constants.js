export const errorMessage = {
    emptyUserName: 'User Name is required',
    emptyPassword: 'Password is required',
    invalidLogin: 'Invalid user name or password'
}

export const ACTION = {
    LOGIN_REQUEST: 'login_request',
    LOGIN_SUCCESS: 'login_success',
    LOGIN_ERROR: 'login_error',
    LOGOUT_REQUEST: 'logout_request',
    LOGOUT_SUCCESS: 'logout_success',
}

export const NAVIGATION = {
    INDEX: {path: '/', label: ''},
    HOME_ROUTE: {path: 'home', label: ''},
    COURSE_ROUTE: {path: 'course', label: 'Course'},
    COURSE_TYPE_ROUTE: {path: 'course-type', label: 'Course Type'}
}
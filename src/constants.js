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
    INDEX: {path: '/', label: '', icon: ''},
    HOME_ROUTE: {path: 'home', label: '', icon: 'school'},
    COURSE_ROUTE: {path: 'course', label: 'Course', icon: 'laptop-code'},
    COURSE_TYPE_ROUTE: {path: 'course-type', label: 'Course Type', icon: 'book-open'}
}

export const SERVICE = {
    LOGIN: '/login',
    USER_PAGES: '/user-pages',
    LOGOUT: '/logout'
}
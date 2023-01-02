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
    COURSE_LIST_REQUEST: 'course_list_request',
    COURSE_LIST_SUCCESS: 'course_list_success',
    COURSE_LIST_ERROR: 'course_lists_error',
}

export const NAVIGATION = {
    INDEX: {path: '/', label: '', icon: ''},
    HOME_ROUTE: {path: 'home', label: '', icon: 'school'},
    COURSE_ROUTE: {path: 'courses', label: 'Course', icon: 'laptop-code'},
    COURSE_TYPE_ROUTE: {path: 'courses-type', label: 'Course Type', icon: 'book-open'}
}

export const SERVICE = {
    LOGIN: '/auth/login',
    USER_PAGES: '/auth/user-pages',
    LOGOUT: '/auth/logout',
    COURSES: '/courses'
}
const userCredentialInitState = {
    userInfo: ''
}

export const userCredentialReducer = (state = userCredentialInitState, action) => {
    switch (action.type) {
        case action.LOGIN:
            return {...state, userInfo: action.payload.user}
        case action.LOGOUT:
            return {...state, userInfo: ''}
        default:
            return state
    }
}

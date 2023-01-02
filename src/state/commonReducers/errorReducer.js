export const errorReducer = (state = {}, action) => {
    const {type, payload} = action;
    const matches = /(.*)_(request|error)/.exec(type);
    if (!matches) return state;
    const [, requestName, requestState] = matches;
    return {...state, [requestName]: requestState === 'error' ? payload.error : null}
}

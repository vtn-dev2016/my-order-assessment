
const actions = {

    SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_ERROR: 'SIGN_IN_ERROR',

    signin: ({ userCredentials, onSuccess }) => (
        {
            type: actions.SIGN_IN_REQUEST,
            userCredentials,
            onSuccess
        }
    ),

    UPDATE_AUTH_STATE: 'UPDATE_AUTH_STATE',
    UPDATE_AUTH_STATE_SUCCESS: 'UPDATE_AUTH_STATE_SUCCESS',

    updateAuthState: () => ({
        type: actions.UPDATE_AUTH_STATE
    })
}

export default actions;

const actions = {

    GET_ADDRESS_REQUEST: 'GET_ADDRESS_REQUEST',
    GET_ADDRESS_SUCCESS: 'GET_ADDRESS_SUCCESS',
    GET_ADDRESS_ERROR: 'GET_ADDRESS_ERROR',

    getAddress: (keyword) => (
        {
            type: actions.GET_ADDRESS_REQUEST,
            keyword,
        }
    ),
}

export default actions;
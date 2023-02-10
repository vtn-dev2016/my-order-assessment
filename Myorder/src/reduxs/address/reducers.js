import actions from "./actions";

const initState = {
  data: [],
  loading: false
};

export default function (state = initState, action) {
  switch (action.type) {
    case actions.GET_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actions.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loadings: false
      };

    case actions.GET_ADDRESS_ERROR:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

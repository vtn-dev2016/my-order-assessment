import actions from "./actions";

const initState = {
  isLoggedIn: false,
  loading: false
};

export default function (state = initState, action: any) {
  switch (action.type) {
    case actions.UPDATE_AUTH_STATE:
      return {
        ...state,
        loading: true
      };
    case actions.UPDATE_AUTH_STATE_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        loading: false
      };

    case actions.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false
      };

    case actions.SIGN_IN_ERROR:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

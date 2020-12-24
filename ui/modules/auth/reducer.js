import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOAD_PROFILE_SUCCESS,
  LOGOUT_SUCCESS,
  LOAD_TOKEN,
} from "./actions";

const initialState = {
  accessToken: null,
  profile: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case LOAD_TOKEN:
      return { ...state, accessToken: action.payload.accessToken };
    case LOAD_PROFILE_SUCCESS:
      return { ...state, profile: action.payload.profile };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default reducer;

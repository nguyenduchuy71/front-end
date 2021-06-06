import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT_FAIL,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
} from "../constants/userConstants";

function userSignupReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, success: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function userSignoutReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNOUT_REQUEST:
      return { loadingSignOut: true };
    case USER_SIGNOUT_SUCCESS:
      return { loading: false, success: action.payload };
    case USER_SIGNOUT_FAIL:
      return { loadingSignOut: false, errorSignOut: action.payload };
    default:
      return state;
  }
}

export { userSignupReducer, userSigninReducer, userSignoutReducer };

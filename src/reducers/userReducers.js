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
  USER_CHECKLOGIN_FAIL,
  USER_CHECKLOGIN_REQUEST,
  USER_CHECKLOGIN_SUCCESS,
  LOAD_COURSES_REQUEST,
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_FAIL,
  LOAD_FORUMS_REQUEST,
  LOAD_FORUMS_SUCCESS,
  LOAD_FORUMS_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
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

function userCheckLoginReducer(state = {}, action) {
  switch (action.type) {
    case USER_CHECKLOGIN_REQUEST:
      return { loadingCheckLogin: true };
    case USER_CHECKLOGIN_SUCCESS:
      return { loadingCheckLogin: false, userCheck: action.payload };
    case USER_CHECKLOGIN_FAIL:
      return { loadingCheckLogin: false, errorCheckLogin: action.payload };
    default:
      return state;
  }
}

function userLoadCoursesReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_COURSES_REQUEST:
      return { loadingCourses: true };
    case LOAD_COURSES_SUCCESS:
      return { loadingCourses: false, courses: action.payload };
    case LOAD_COURSES_FAIL:
      return { loadingCourses: false, errorLoadCourses: action.payload };
    default:
      return state;
  }
}

function userLoadForumsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_FORUMS_REQUEST:
      return { loadingForums: true };
    case LOAD_FORUMS_SUCCESS:
      return { loadingForums: false, forums: action.payload };
    case LOAD_FORUMS_FAIL:
      return { loadingForums: false, errorLoadForums: action.payload };
    default:
      return state;
  }
}

function userAddForumReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_FORUMS_REQUEST:
      return { loadingAddForum: true };
    case LOAD_FORUMS_SUCCESS:
      return { loadingAddForum: false, forum: action.payload };
    case LOAD_FORUMS_FAIL:
      return { loadingAddForum: false, errorAddForum: action.payload };
    default:
      return state;
  }
}

function userUpdateProfileReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return { loadingUpdateProfile: true };
    case UPDATE_PROFILE_SUCCESS:
      return { loadingUpdateProfile: false, profile: action.payload };
    case UPDATE_PROFILE_FAIL:
      return { loadingUpdateProfile: false, errorUpdateProfile: action.payload };
    default:
      return state;
  }
}

export {
  userSignupReducer,
  userSigninReducer,
  userSignoutReducer,
  userCheckLoginReducer,
  userLoadCoursesReducer,
  userLoadForumsReducer,
  userAddForumReducer,
  userUpdateProfileReducer,
};

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSignupReducer = userSignupReducer;
exports.userSigninReducer = userSigninReducer;
exports.userSignoutReducer = userSignoutReducer;
exports.userCheckLoginReducer = userCheckLoginReducer;
exports.userLoadCoursesReducer = userLoadCoursesReducer;
exports.userLoadForumsReducer = userLoadForumsReducer;
exports.userAddForumReducer = userAddForumReducer;
exports.userUpdateProfileReducer = userUpdateProfileReducer;

var _userConstants = require("../constants/userConstants");

function userSignupReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.USER_SIGNUP_REQUEST:
      return {
        loading: true
      };

    case _userConstants.USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        success: action.payload
      };

    case _userConstants.USER_SIGNUP_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

function userSigninReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.USER_SIGNIN_REQUEST:
      return {
        loading: true
      };

    case _userConstants.USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      };

    case _userConstants.USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

function userSignoutReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.USER_SIGNOUT_REQUEST:
      return {
        loadingSignOut: true
      };

    case _userConstants.USER_SIGNOUT_SUCCESS:
      return {
        loading: false,
        success: action.payload
      };

    case _userConstants.USER_SIGNOUT_FAIL:
      return {
        loadingSignOut: false,
        errorSignOut: action.payload
      };

    default:
      return state;
  }
}

function userCheckLoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.USER_CHECKLOGIN_REQUEST:
      return {
        loadingCheckLogin: true
      };

    case _userConstants.USER_CHECKLOGIN_SUCCESS:
      return {
        loadingCheckLogin: false,
        userCheck: action.payload
      };

    case _userConstants.USER_CHECKLOGIN_FAIL:
      return {
        loadingCheckLogin: false,
        errorCheckLogin: action.payload
      };

    default:
      return state;
  }
}

function userLoadCoursesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.LOAD_COURSES_REQUEST:
      return {
        loadingCourses: true
      };

    case _userConstants.LOAD_COURSES_SUCCESS:
      return {
        loadingCourses: false,
        courses: action.payload
      };

    case _userConstants.LOAD_COURSES_FAIL:
      return {
        loadingCourses: false,
        errorLoadCourses: action.payload
      };

    default:
      return state;
  }
}

function userLoadForumsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.LOAD_FORUMS_REQUEST:
      return {
        loadingForums: true
      };

    case _userConstants.LOAD_FORUMS_SUCCESS:
      return {
        loadingForums: false,
        forums: action.payload
      };

    case _userConstants.LOAD_FORUMS_FAIL:
      return {
        loadingForums: false,
        errorLoadForums: action.payload
      };

    default:
      return state;
  }
}

function userAddForumReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.LOAD_FORUMS_REQUEST:
      return {
        loadingAddForum: true
      };

    case _userConstants.LOAD_FORUMS_SUCCESS:
      return {
        loadingAddForum: false,
        forum: action.payload
      };

    case _userConstants.LOAD_FORUMS_FAIL:
      return {
        loadingAddForum: false,
        errorAddForum: action.payload
      };

    default:
      return state;
  }
}

function userUpdateProfileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.UPDATE_PROFILE_REQUEST:
      return {
        loadingUpdateProfile: true
      };

    case _userConstants.UPDATE_PROFILE_SUCCESS:
      return {
        loadingUpdateProfile: false,
        profile: action.payload
      };

    case _userConstants.UPDATE_PROFILE_FAIL:
      return {
        loadingUpdateProfile: false,
        errorUpdateProfile: action.payload
      };

    default:
      return state;
  }
}
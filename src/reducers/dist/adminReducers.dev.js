"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminDeleteCourseReducer = adminDeleteCourseReducer;
exports.adminAddCourseReducer = adminAddCourseReducer;
exports.adminUpdateCourseReducer = adminUpdateCourseReducer;
exports.adminDeleteForumReducer = adminDeleteForumReducer;
exports.adminLoadForumReducer = adminLoadForumReducer;
exports.adminLoadUsersReducer = adminLoadUsersReducer;

var _adminConstants = require("../constants/adminConstants");

function adminDeleteCourseReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _adminConstants.ADMIN_DELETE_COURSE_REQUEST:
      return {
        loadingDeleteCourse: true
      };

    case _adminConstants.ADMIN_DELETE_COURSE_SUCCESS:
      return {
        loadingDeleteCourse: false,
        new_courses: action.payload
      };

    case _adminConstants.ADMIN_DELETE_COURSE_FAIL:
      return {
        loadingDeleteCourse: false,
        errorDeleteCourse: action.payload
      };

    default:
      return state;
  }
}

function adminAddCourseReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _adminConstants.ADMIN_ADD_COURSE_REQUEST:
      return {
        loadingAddCourse: true
      };

    case _adminConstants.ADMIN_ADD_COURSE_SUCCESS:
      return {
        loadingAddCourse: false,
        new_courses: action.payload
      };

    case _adminConstants.ADMIN_ADD_COURSE_FAIL:
      return {
        loadingAddCourse: false,
        errorAddCourse: action.payload
      };

    default:
      return state;
  }
}

function adminUpdateCourseReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _adminConstants.ADMIN_UPDATE_COURSE_REQUEST:
      return {
        loadingUpdateCourse: true
      };

    case _adminConstants.ADMIN_UPDATE_COURSE_SUCCESS:
      return {
        loadingUpdateCourse: false,
        new_courses: action.payload
      };

    case _adminConstants.ADMIN_UPDATE_COURSE_FAIL:
      return {
        loadingUpdateCourse: false,
        errorUpdateCourse: action.payload
      };

    default:
      return state;
  }
}

function adminDeleteForumReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _adminConstants.ADMIN_DELETE_FORUM_REQUEST:
      return {
        loadingDeleteForum: true
      };

    case _adminConstants.ADMIN_DELETE_FORUM_SUCCESS:
      return {
        loadingDeleteForum: false,
        new_forums: action.payload
      };

    case _adminConstants.ADMIN_DELETE_FORUM_FAIL:
      return {
        loadingDeleteForum: false,
        errorDeleteForum: action.payload
      };

    default:
      return state;
  }
}

function adminLoadForumReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _adminConstants.ADMIN_LOAD_FORUM_REQUEST:
      return {
        loadingLoadForum: true
      };

    case _adminConstants.ADMIN_LOAD_FORUM_SUCCESS:
      return {
        loadingLoadForum: false,
        new_forums: action.payload
      };

    case _adminConstants.ADMIN_LOAD_FORUM_FAIL:
      return {
        loadingLoadForum: false,
        errorLoadForum: action.payload
      };

    default:
      return state;
  }
}

function adminLoadUsersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _adminConstants.ADMIN_LOAD_USERS_REQUEST:
      return {
        loadingUsers: true
      };

    case _adminConstants.ADMIN_LOAD_USERS_SUCCESS:
      return {
        loadingUsersForum: false,
        users: action.payload
      };

    case _adminConstants.ADMIN_LOAD_USERS_FAIL:
      return {
        loadingUsers: false,
        errorUsers: action.payload
      };

    default:
      return state;
  }
}
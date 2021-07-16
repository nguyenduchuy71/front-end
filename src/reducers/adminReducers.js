import {
  ADMIN_GETUSERS_FAIL,
  ADMIN_GETUSERS_REQUEST,
  ADMIN_GETUSERS_SUCCESS,
  ADMIN_DELETE_COURSE_FAIL,
  ADMIN_DELETE_COURSE_REQUEST,
  ADMIN_DELETE_COURSE_SUCCESS,
  ADMIN_ADD_COURSE_FAIL,
  ADMIN_ADD_COURSE_REQUEST,
  ADMIN_ADD_COURSE_SUCCESS,
  ADMIN_UPDATE_COURSE_FAIL,
  ADMIN_UPDATE_COURSE_REQUEST,
  ADMIN_UPDATE_COURSE_SUCCESS,
  ADMIN_DELETE_FORUM_FAIL,
  ADMIN_DELETE_FORUM_REQUEST,
  ADMIN_DELETE_FORUM_SUCCESS,
  ADMIN_LOAD_FORUM_FAIL,
  ADMIN_LOAD_FORUM_REQUEST,
  ADMIN_LOAD_FORUM_SUCCESS,
} from "../constants/adminConstants";

function getUsersReducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_GETUSERS_REQUEST:
      return { loadingGetUsers: true };
    case ADMIN_GETUSERS_SUCCESS:
      return { loadingGetUsers: false, users: action.payload };
    case ADMIN_GETUSERS_FAIL:
      return { loadingGetUsers: false, errorGetUsers: action.payload };
    default:
      return state;
  }
}
function adminDeleteCourseReducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_DELETE_COURSE_REQUEST:
      return { loadingDeleteCourse: true };
    case ADMIN_DELETE_COURSE_SUCCESS:
      return { loadingDeleteCourse: false, new_courses: action.payload };
    case ADMIN_DELETE_COURSE_FAIL:
      return { loadingDeleteCourse: false, errorDeleteCourse: action.payload };
    default:
      return state;
  }
}
function adminAddCourseReducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_ADD_COURSE_REQUEST:
      return { loadingAddCourse: true };
    case ADMIN_ADD_COURSE_SUCCESS:
      return { loadingAddCourse: false, new_courses: action.payload };
    case ADMIN_ADD_COURSE_FAIL:
      return { loadingAddCourse: false, errorAddCourse: action.payload };
    default:
      return state;
  }
}
function adminUpdateCourseReducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_UPDATE_COURSE_REQUEST:
      return { loadingUpdateCourse: true };
    case ADMIN_UPDATE_COURSE_SUCCESS:
      return { loadingUpdateCourse: false, new_courses: action.payload };
    case ADMIN_UPDATE_COURSE_FAIL:
      return { loadingUpdateCourse: false, errorUpdateCourse: action.payload };
    default:
      return state;
  }
}
function adminDeleteForumReducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_DELETE_FORUM_REQUEST:
      return { loadingDeleteForum: true };
    case ADMIN_DELETE_FORUM_SUCCESS:
      return { loadingDeleteForum: false, new_forums: action.payload };
    case ADMIN_DELETE_FORUM_FAIL:
      return { loadingDeleteForum: false, errorDeleteForum: action.payload };
    default:
      return state;
  }
}
function adminLoadForumReducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_LOAD_FORUM_REQUEST:
      return { loadingLoadForum: true };
    case ADMIN_LOAD_FORUM_SUCCESS:
      return { loadingLoadForum: false, new_forums: action.payload };
    case ADMIN_LOAD_FORUM_FAIL:
      return { loadingLoadForum: false, errorLoadForum: action.payload };
    default:
      return state;
  }
}
export {
  getUsersReducer,
  adminDeleteCourseReducer,
  adminAddCourseReducer,
  adminUpdateCourseReducer,
  adminDeleteForumReducer,
  adminLoadForumReducer,
};

import {
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
  ADMIN_LOAD_USERS_FAIL,
  ADMIN_LOAD_USERS_REQUEST,
  ADMIN_LOAD_USERS_SUCCESS,
} from "../constants/adminConstants";

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
function adminLoadUsersReducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_LOAD_USERS_REQUEST:
      return { loadingUsers: true };
    case ADMIN_LOAD_USERS_SUCCESS:
      return { loadingUsersForum: false, users: action.payload };
    case ADMIN_LOAD_USERS_FAIL:
      return { loadingUsers: false, errorUsers: action.payload };
    default:
      return state;
  }
}

export {
  adminDeleteCourseReducer,
  adminAddCourseReducer,
  adminUpdateCourseReducer,
  adminDeleteForumReducer,
  adminLoadForumReducer,
  adminLoadUsersReducer,
};

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  userSignupReducer,
  userSigninReducer,
  userSignoutReducer,
  userCheckLoginReducer,
  userLoadCoursesReducer,
  userLoadForumsReducer,
  userAddForumReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import {
  getUsersReducer,
  adminDeleteCourseReducer,
  adminAddCourseReducer,
  adminDeleteForumReducer,
  adminLoadForumReducer,
} from "./reducers/adminReducers";

const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = { userSignin: { userInfo } };
const reducer = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  userSignout: userSignoutReducer,
  userCheckLogin: userCheckLoginReducer,
  userLoadCourses: userLoadCoursesReducer,
  userLoadForums: userLoadForumsReducer,
  userAddForum: userAddForumReducer,
  userUpdateProfile: userUpdateProfileReducer,
  getUsers: getUsersReducer,
  adminDeleteForum: adminDeleteForumReducer,
  adminDeleteCourse: adminDeleteCourseReducer,
  adminAddCourse: adminAddCourseReducer,
  adminLoadForum:adminLoadForumReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

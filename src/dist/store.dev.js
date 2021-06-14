"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _userReducers = require("./reducers/userReducers");

var _adminReducers = require("./reducers/adminReducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userInfo = _jsCookie["default"].getJSON("userInfo") || null;
var initialState = {
  userSignin: {
    userInfo: userInfo
  }
};
var reducer = (0, _redux.combineReducers)({
  userSignup: _userReducers.userSignupReducer,
  userSignin: _userReducers.userSigninReducer,
  userSignout: _userReducers.userSignoutReducer,
  userCheckLogin: _userReducers.userCheckLoginReducer,
  getUsers: _adminReducers.getUsersReducer,
  userLoadCourses: _userReducers.userLoadCoursesReducer,
  userLoadForums: _userReducers.userLoadForumsReducer,
  userAddForum: _userReducers.userAddForumReducer,
  userUpdateProfile: _userReducers.userUpdateProfileReducer
});
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)(reducer, initialState, composeEnhancer((0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;
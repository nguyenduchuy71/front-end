"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.addForum = exports.loadForums = exports.loadCourses = exports.checklogin = exports.signout = exports.signin = exports.signup = void 0;

var _userConstants = require("../constants/userConstants");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signup = function signup(user) {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _userConstants.USER_SIGNUP_REQUEST,
              payload: user
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("/account/", user));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _userConstants.USER_SIGNUP_SUCCESS,
              payload: true
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _userConstants.USER_SIGNUP_FAIL,
              payload: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.signup = signup;

var signin = function signin(username, password) {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: _userConstants.USER_SIGNIN_REQUEST,
              payload: {
                username: username,
                password: password
              }
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/account/", {
              params: {
                username: username,
                password: password
              }
            }));

          case 4:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _userConstants.USER_SIGNIN_SUCCESS,
              payload: data.user
            });

            _jsCookie["default"].set("access_token", data.access_token);

            _jsCookie["default"].set("userInfo", JSON.stringify(data.user));

            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            dispatch({
              type: _userConstants.USER_SIGNIN_FAIL,
              payload: _context2.t0.message
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 11]]);
  };
};

exports.signin = signin;

var signout = function signout() {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch({
              type: _userConstants.USER_SIGNOUT_REQUEST,
              payload: {}
            });

            try {
              _jsCookie["default"].remove("access_token");

              _jsCookie["default"].remove("userInfo");

              dispatch({
                type: _userConstants.USER_SIGNOUT_SUCCESS,
                payload: true
              });
            } catch (error) {
              dispatch({
                type: _userConstants.USER_SIGNOUT_FAIL,
                payload: error.message
              });
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.signout = signout;

var checklogin = function checklogin() {
  return function _callee4(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch({
              type: _userConstants.USER_CHECKLOGIN_REQUEST,
              payload: {}
            });
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/account/check-login/", {
              headers: {
                Authorization: "Bearer " + _jsCookie["default"].get("access_token")
              }
            }));

          case 4:
            _ref3 = _context4.sent;
            data = _ref3.data;
            dispatch({
              type: _userConstants.USER_CHECKLOGIN_SUCCESS,
              payload: data
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            dispatch({
              type: _userConstants.USER_CHECKLOGIN_FAIL,
              payload: _context4.t0.message
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.checklogin = checklogin;

var loadCourses = function loadCourses() {
  return function _callee5(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dispatch({
              type: _userConstants.LOAD_COURSES_REQUEST,
              payload: {}
            });
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/course/"));

          case 4:
            _ref4 = _context5.sent;
            data = _ref4.data;
            dispatch({
              type: _userConstants.LOAD_COURSES_SUCCESS,
              payload: data
            });
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            dispatch({
              type: _userConstants.LOAD_COURSES_FAIL,
              payload: _context5.t0.message
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.loadCourses = loadCourses;

var loadForums = function loadForums() {
  return function _callee6(dispatch) {
    var _ref5, data;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            dispatch({
              type: _userConstants.LOAD_FORUMS_REQUEST,
              payload: {}
            });
            _context6.prev = 1;
            _context6.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/forum/"));

          case 4:
            _ref5 = _context6.sent;
            data = _ref5.data;
            dispatch({
              type: _userConstants.LOAD_FORUMS_SUCCESS,
              payload: data
            });
            _context6.next = 12;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            dispatch({
              type: _userConstants.LOAD_FORUMS_FAIL,
              payload: _context6.t0.message
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.loadForums = loadForums;

var addForum = function addForum(value) {
  return function _callee7(dispatch) {
    var _ref6, data;

    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            dispatch({
              type: _userConstants.ADD_FORUM_REQUEST,
              payload: {}
            });
            _context7.prev = 1;
            _context7.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("/forum/", value, {
              headers: {
                Authorization: "Bearer " + _jsCookie["default"].get("access_token")
              }
            }));

          case 4:
            _ref6 = _context7.sent;
            data = _ref6.data;
            dispatch({
              type: _userConstants.ADD_FORUM_SUCCESS,
              payload: data
            });
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](1);
            dispatch({
              type: _userConstants.ADD_FORUM_FAIL,
              payload: _context7.t0.message
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.addForum = addForum;

var updateProfile = function updateProfile(value) {
  return function _callee8(dispatch) {
    var _ref7, data;

    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            dispatch({
              type: _userConstants.UPDATE_PROFILE_REQUEST,
              payload: {}
            });
            _context8.prev = 1;
            _context8.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("/account/update/", value, {
              headers: {
                Authorization: "Bearer " + _jsCookie["default"].get("access_token")
              }
            }));

          case 4:
            _ref7 = _context8.sent;
            data = _ref7.data;

            _jsCookie["default"].set("userInfo", JSON.stringify(data));

            dispatch({
              type: _userConstants.UPDATE_PROFILE_SUCCESS,
              payload: data
            });
            _context8.next = 13;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](1);
            dispatch({
              type: _userConstants.UPDATE_PROFILE_FAIL,
              payload: _context8.t0.message
            });

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[1, 10]]);
  };
};

exports.updateProfile = updateProfile;
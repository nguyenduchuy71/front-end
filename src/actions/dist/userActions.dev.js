"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checklogin = exports.signout = exports.signin = exports.signup = void 0;

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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUsers = exports.loadForums = exports.deleteForum = exports.updateCourse = exports.addCourse = exports.deleteCourse = void 0;

var _adminConstants = require("../constants/adminConstants");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _axios = _interopRequireDefault(require("axios"));

var _url = require("../url");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deleteCourse = function deleteCourse(id) {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _adminConstants.ADMIN_DELETE_COURSE_REQUEST,
              payload: {}
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(_url.URL_SERVER, "/course/"), {
              data: {
                id: id
              }
            }));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _adminConstants.ADMIN_DELETE_COURSE_SUCCESS,
              payload: data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _adminConstants.ADMIN_DELETE_COURSE_FAIL,
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

exports.deleteCourse = deleteCourse;

var addCourse = function addCourse(data) {
  return function _callee2(dispatch) {
    var _ref2, new_data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: _adminConstants.ADMIN_ADD_COURSE_REQUEST,
              payload: {}
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(_url.URL_SERVER, "/course/"), data));

          case 4:
            _ref2 = _context2.sent;
            new_data = _ref2.new_data;
            dispatch({
              type: _adminConstants.ADMIN_ADD_COURSE_SUCCESS,
              payload: new_data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            dispatch({
              type: _adminConstants.ADMIN_ADD_COURSE_FAIL,
              payload: _context2.t0.message
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.addCourse = addCourse;

var updateCourse = function updateCourse(data) {
  return function _callee3(dispatch) {
    var _ref3, new_data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch({
              type: _adminConstants.ADMIN_UPDATE_COURSE_REQUEST,
              payload: {}
            });
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].put("".concat(_url.URL_SERVER, "/course/"), data));

          case 4:
            _ref3 = _context3.sent;
            new_data = _ref3.new_data;
            dispatch({
              type: _adminConstants.ADMIN_UPDATE_COURSE_SUCCESS,
              payload: new_data
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            dispatch({
              type: _adminConstants.ADMIN_UPDATE_COURSE_FAIL,
              payload: _context3.t0.message
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.updateCourse = updateCourse;

var deleteForum = function deleteForum(id) {
  return function _callee4(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch({
              type: _adminConstants.ADMIN_DELETE_FORUM_REQUEST,
              payload: {}
            });
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(_url.URL_SERVER, "/forum/"), {
              data: {
                id: id
              }
            }));

          case 4:
            _ref4 = _context4.sent;
            data = _ref4.data;
            dispatch({
              type: _adminConstants.ADMIN_DELETE_FORUM_SUCCESS,
              payload: data
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            dispatch({
              type: _adminConstants.ADMIN_DELETE_FORUM_FAIL,
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

exports.deleteForum = deleteForum;

var loadForums = function loadForums() {
  return function _callee5(dispatch) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dispatch({
              type: _adminConstants.ADMIN_LOAD_FORUM_REQUEST,
              payload: {}
            });
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(_url.URL_SERVER, "/account/check-login/"), {
              headers: {
                Authorization: "Bearer " + _jsCookie["default"].get("access_token")
              }
            }).then(function (res) {
              if (res.status === 200) {
                _axios["default"].get("".concat(_url.URL_SERVER, "/forum/"), {
                  headers: {
                    Authorization: "Bearer " + _jsCookie["default"].get("access_token")
                  }
                }).then(function (res) {
                  if (res.status === 200) {
                    dispatch({
                      type: _adminConstants.ADMIN_LOAD_FORUM_SUCCESS,
                      payload: res.data
                    });
                  }
                })["catch"](function (error) {
                  return console.log(error.message);
                });
              }
            })["catch"](function (error) {
              return console.log(error.message);
            }));

          case 4:
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](1);
            dispatch({
              type: _adminConstants.ADMIN_LOAD_FORUM_FAIL,
              payload: _context5.t0.message
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 6]]);
  };
};

exports.loadForums = loadForums;

var loadUsers = function loadUsers() {
  return function _callee6(dispatch) {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            dispatch({
              type: _adminConstants.ADMIN_LOAD_USERS_REQUEST,
              payload: {}
            });
            _context6.prev = 1;
            _context6.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(_url.URL_SERVER, "/account/check-login/"), {
              headers: {
                Authorization: "Bearer " + _jsCookie["default"].get("access_token")
              }
            }).then(function (res) {
              if (res.status === 200) {
                _axios["default"].get("".concat(_url.URL_SERVER, "/account/get-all/"), {
                  headers: {
                    Authorization: "Bearer " + _jsCookie["default"].get("access_token")
                  }
                }).then(function (res) {
                  if (res.status === 200) {
                    dispatch({
                      type: _adminConstants.ADMIN_LOAD_USERS_SUCCESS,
                      payload: res.data
                    });
                  }
                })["catch"](function (error) {
                  return console.log(error.message);
                });
              }
            })["catch"](function (error) {
              return console.log(error.message);
            }));

          case 4:
            _context6.next = 9;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](1);
            dispatch({
              type: _adminConstants.ADMIN_LOAD_USERS_FAIL,
              payload: _context6.t0.message
            });

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[1, 6]]);
  };
};

exports.loadUsers = loadUsers;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getusers = void 0;

var _adminConstants = require("../constants/adminConstants");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getusers = function getusers() {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _adminConstants.ADMIN_GETUSERS_REQUEST,
              payload: {}
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/account/get-all/", {
              headers: {
                Authorization: "Bearer " + _jsCookie["default"].get("access_token")
              }
            }));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _adminConstants.ADMIN_GETUSERS_SUCCESS,
              payload: data.filter(function (row) {
                return row.is_staff === false;
              })
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _adminConstants.ADMIN_GETUSERS_FAIL,
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

exports.getusers = getusers;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  state: {
    user: []
  },
  actions: {
    register: function register(_ref, data) {
      var commit, res, recordUser;
      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].post('http://localhost:3000/register', data));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(res.json());

            case 6:
              recordUser = _context.sent;
              _context.next = 9;
              return regeneratorRuntime.awrap(commit('addUser', recordUser));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  mutations: {
    addUser: function addUser(state, item) {
      state.user.unshift(item);
    }
  },
  getters: {
    fullUsers: function fullUsers(state) {
      return console.log(state.user);
    }
  }
};
exports["default"] = _default;
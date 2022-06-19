"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  state: {
    user: [],
    isLogin: false
  },
  mutations: {
    isLoginUser: function isLoginUser(state) {
      state.isLogin = true;
    }
  },
  actions: {
    loginSee: function loginSee(_ref, data) {
      var commit, res;
      return regeneratorRuntime.async(function loginSee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].post('http://localhost:3000/login', data));

            case 3:
              res = _context.sent;
              commit('isLoginUser', state.user.push(res.data));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  getters: {}
};
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _dotenv = require("dotenv");
var _user = require("../tools/user");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _query = require("../constants/query");
(0, _dotenv.config)();
var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body$input$input, phone, password, user, value, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body$input$input = req.body.input.inputs, phone = _req$body$input$input.phone, password = _req$body$input$input.password;
          console.log(phone, password);
          _context.next = 4;
          return (0, _user.User)({
            phone: phone
          }, _query.USER_QUERY_BY_ID);
        case 4:
          user = _context.sent;
          console.log(user);
          if (user) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'incorrect username or password please enter again'
          }));
        case 10:
          _context.next = 12;
          return _bcrypt["default"].compare(password, user.password);
        case 12:
          value = _context.sent;
          console.log(value);
          if (value) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'incorrect password'
          }));
        case 16:
          token = _jsonwebtoken["default"].sign({
            'https://hasura.io/jwt/claims': {
              'x-hasura-allowed-roles': ['admins', 'customers', 'sellers'],
              'x-hasura-default-role': user.role.name,
              'x-hasura-user-id': "".concat(user.id)
            }
          }, process.env.HASURA_GRAPHQL_JWT_SECRET);
          return _context.abrupt("return", res.json({
            accestoken: token,
            id: user.id
          }));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = handler;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _apollo = _interopRequireDefault(require("../configuration/apollo.config"));
var _query = require("../constants/query");
var _user = require("../tools/user");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _require = require('uuid'),
  uuidv4 = _require.v4;
var execute = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query, variables) {
    var fetchResponse;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _apollo["default"].request(query, variables);
        case 2:
          fetchResponse = _context.sent;
          console.log(fetchResponse);
          return _context.abrupt("return", fetchResponse);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function execute(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handler = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body$input$input, fname, lname, phone, password, types, user, saltRounds, salt, hashed, variables, seller, _saltRounds, _salt, _hashed, _variables, customer;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body.input);
          _req$body$input$input = req.body.input.input, fname = _req$body$input$input.fname, lname = _req$body$input$input.lname, phone = _req$body$input$input.phone, password = _req$body$input$input.password, types = _req$body$input$input.types;
          _context2.next = 4;
          return (0, _user.User)({
            phone: phone
          }, _query.USER_QUERY_BY_ID);
        case 4:
          user = _context2.sent;
          if (!(types === 'sellers')) {
            _context2.next = 21;
            break;
          }
          if (!user) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'you are  registered no registratrion again'
          }));
        case 10:
          saltRounds = 10;
          salt = _bcrypt["default"].genSaltSync(saltRounds);
          hashed = _bcrypt["default"].hashSync(password, salt);
          variables = {
            first_name: fname,
            last_name: lname,
            phone: phone,
            password: hashed,
            role_id: '70149797-d035-464e-8479-c6502de55ed6',
            id: uuidv4()
          };
          _context2.next = 16;
          return execute(_query.INSERT_SELLERS, variables);
        case 16:
          seller = _context2.sent;
          console.log(seller);
          if (seller) {
            res.send({
              success: 'You are succefully registered.Now you can Sell your products'
            });
          } else {
            res.send({
              message: 'something went wrong please try again'
            });
          }
        case 19:
          _context2.next = 33;
          break;
        case 21:
          if (!user) {
            _context2.next = 25;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'you are  registered no registratrion again'
          }));
        case 25:
          _saltRounds = 10;
          _salt = _bcrypt["default"].genSaltSync(_saltRounds);
          _hashed = _bcrypt["default"].hashSync(password, _salt);
          _variables = {
            first_name: fname,
            last_name: lname,
            phone: phone,
            password: _hashed
          };
          _context2.next = 31;
          return execute(_query.INSERT_CUSTOMERS, _variables);
        case 31:
          customer = _context2.sent;
          if (customer) {
            res.send({
              success: 'You are succefully registered'
            });
          } else {
            res.send({
              message: 'something went wrong please try again'
            });
          }
        case 33:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function handler(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
module.exports = handler;
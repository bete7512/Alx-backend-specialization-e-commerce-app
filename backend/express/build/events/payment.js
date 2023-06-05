"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = require("../tools/user");
var _uuid = require("uuid");
var Chapa = require('./payment/chap');
var myChapa = new Chapa('CHASECK_TEST-R2r7oy9nnhaZuJLpM47VxYVHZXadMkS6');
var CUSTOMER_QUERY = "\nquery MyQuery($id: uuid = \"\") {\n    customers_by_pk(id: $id) {\n      first_name\n      last_name\n      phone\n      id\n    }\n  }\n";
var chapa = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(customerInfo) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return myChapa.initialize(customerInfo, {
            autoRef: true
          });
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function chapa(_x) {
    return _ref.apply(this, arguments);
  };
}();
/*
response:
    {
    message: 'Hosted Link',
    status: 'success' || 'failed',
    data: {
        checkout_url: 'https://checkout.chapa.co/checkout/payment/:token'
    },
    tx_ref: 'generated-token' // this will be the auto generated reference
    }
*/
var handler = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, user, customerInfo, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = parseInt(req.body.event.session_variables['x-hasura-user-id']);
          user = (0, _user.User)(id, CUSTOMER_QUERY);
          if (!user) {
            _context2.next = 16;
            break;
          }
          customerInfo = {
            amount: '100',
            currency: 'ETB',
            email: data['data']['customers_by_pk']['phone'],
            first_name: data['data']['customers_by_pk']['first_name'],
            last_name: data['data']['customers_by_pk']['last_name'],
            tx_ref: (0, _uuid.v4)(),
            callback_url: 'https://chapa.co',
            // your callback URL
            customization: {
              title: 'I love e-commerce',
              description: 'It is time to pay'
            }
          };
          _context2.prev = 4;
          _context2.next = 7;
          return chapa(customerInfo);
        case 7:
          response = _context2.sent;
          console.log(response.data.checkout_url);
          return _context2.abrupt("return", res.json(response.data.checkout_url));
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](4);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(400).json(_context2.t0));
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 12]]);
  }));
  return function handler(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
module.exports = handler;
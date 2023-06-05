"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _product = require("../tools/product");
var _user_by_pk = require("../tools/user_by_pk");
var _order = require("../tools/order");
var _uuid = require("uuid");
var _apollo = _interopRequireDefault(require("../configuration/apollo.config"));
var Chapa = require('../payment/chapa');
var USER_QUERY = " \nquery MyQuery($id: uuid = \"\") {\n    customers_by_pk(id: $id) {\n      address\n      avator\n      email\n      created_at\n      first_name\n      id\n      last_name\n      phone\n    }\n  }\n";
var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var u_id, p_id, cart_id, address_id, quantity, product, user, phone, first_name, last_name, price, response_url, myChapa, customerInfo, chapa, chapa_response, order, DELETE_CART, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log('am there');
          console.log(req.body);
          u_id = req.body.session_variables['x-hasura-user-id'];
          p_id = req.body.input.inputs.product_id;
          cart_id = req.body.input.inputs.cart_id;
          address_id = req.body.input.inputs.address;
          quantity = req.body.input.inputs.quantity;
          console.log(p_id);
          _context2.next = 10;
          return (0, _product.Product)({
            id: p_id
          });
        case 10:
          product = _context2.sent;
          console.log(product);
          _context2.next = 14;
          return (0, _user_by_pk.User)({
            id: u_id
          }, USER_QUERY);
        case 14:
          user = _context2.sent;
          console.log(user);
          phone = user.phone, first_name = user.first_name, last_name = user.last_name;
          price = product.price;
          myChapa = new Chapa('CHASECK_TEST-R2r7oy9nnhaZuJLpM47VxYVHZXadMkS6');
          customerInfo = {
            amount: "".concat(price) * quantity,
            currency: 'ETB',
            phone: phone,
            email: 'betekbebe@gmail.com',
            first_name: first_name,
            last_name: last_name,
            tx_ref: (0, _uuid.v4)(),
            callback_url: 'https://webhook.site/',
            return_url: 'http://localhost:5173/',
            // your callback URL
            customization: {
              title: 'I love e-commerce',
              description: 'It is time to pay'
            }
          };
          chapa = /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(customerInfo) {
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
                    console.log(_context.t0);
                    return _context.abrupt("return", _context.t0);
                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 7]]);
            }));
            return function chapa(_x3) {
              return _ref2.apply(this, arguments);
            };
          }();
          _context2.prev = 21;
          _context2.next = 24;
          return chapa(customerInfo);
        case 24:
          chapa_response = _context2.sent;
          console.log(chapa_response);
          response_url = chapa_response.data.checkout_url;
          _context2.next = 29;
          return (0, _order.insert_order)({
            customer_id: u_id,
            product_id: p_id,
            reference_id: chapa_response.tx_ref,
            address_id: address_id,
            quantity: quantity
          });
        case 29:
          order = _context2.sent;
          console.log(order);
          _context2.next = 37;
          break;
        case 33:
          _context2.prev = 33;
          _context2.t0 = _context2["catch"](21);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(400).json({
            error: _context2.t0.message
          }));
        case 37:
          _context2.prev = 37;
          DELETE_CART = "mutation MyMutation($id: uuid = \"\") {\n      delete_cart_by_pk(id: $id) {\n        id\n      }\n    }\n    ";
          _context2.next = 41;
          return _apollo["default"].request(DELETE_CART, {
            id: cart_id
          });
        case 41:
          response = _context2.sent;
          _context2.next = 47;
          break;
        case 44:
          _context2.prev = 44;
          _context2.t1 = _context2["catch"](37);
          console.log(_context2.t1);
        case 47:
          return _context2.abrupt("return", res.json({
            check_out: response_url
          }));
        case 48:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[21, 33], [37, 44]]);
  }));
  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = handler;
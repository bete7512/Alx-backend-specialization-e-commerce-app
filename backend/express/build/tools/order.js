"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insert_order = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _apollo = _interopRequireDefault(require("../configuration/apollo.config"));
var add_order = "\nmutation MyMutation($customer_id: uuid = \"\", $product_id: uuid = \"\", $reference_id: uuid = \"\", $address_id: uuid = \"\", $quantity: Int = 1) {\n\tinsert_order(objects: {customer_id: $customer_id, product_id: $product_id, reference_id: $reference_id, address_id: $address_id, quantity: $quantity}) {\n\t  affected_rows\n\t  returning {\n\t\tid\n\t  }\n\t}\n  }\n   \n";
var insert_order = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(variables) {
    var fetchResponse;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _apollo["default"].request(add_order, variables);
        case 2:
          fetchResponse = _context.sent;
          console.log(fetchResponse);
          return _context.abrupt("return", fetchResponse.insert_order);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function insert_order(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.insert_order = insert_order;
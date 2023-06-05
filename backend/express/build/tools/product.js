"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _apollo = _interopRequireDefault(require("../configuration/apollo.config"));
var Product = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(variables) {
    var query, product;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          query = "\n        query MyQuery($id: uuid = \"8b2cc37a-9a17-4995-98ec-f84a4983c6fb\") {\n            products_by_pk(id: $id) {\n              about_product\n              average_rate\n              average_rates\n              category_id\n              created_at\n              id\n              is_carted\n              price\n            }\n          }";
          _context.next = 4;
          return _apollo["default"].request(query, variables);
        case 4:
          product = _context.sent;
          return _context.abrupt("return", product.products_by_pk);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", _context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function Product(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.Product = Product;
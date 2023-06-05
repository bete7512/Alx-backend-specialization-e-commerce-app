"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cloudinary = _interopRequireDefault(require("../cloudinary/cloudinary.js"));
var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body$input, name, type, base64str, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body$input = req.body.input, name = _req$body$input.name, type = _req$body$input.type, base64str = _req$body$input.base64str;
          _context.next = 4;
          return _cloudinary["default"].uploader.upload("data:image/jepg;base64,".concat(base64str));
        case 4:
          result = _context.sent;
          console.log(result.url);
          return _context.abrupt("return", res.json({
            file_path: result.url
          }));
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(400).json({
            message: _context.t0
          }));
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = handler;
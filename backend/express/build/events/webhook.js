"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var crypto = require('crypto');
var secret = process.env.SECRET_KEY;
// Using Express

var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var hash, event;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          //validate event
          hash = crypto.createHmac('sha256', secret).update(JSON.stringify(req.body)).digest('hex');
          if (hash == req.headers['Chapa-Signature']) {
            // Retrieve the request's body
            console.log(req.body);
            event = req.body;
            console.log(event.body);
            // Do something with event  
          }

          res.send(200);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
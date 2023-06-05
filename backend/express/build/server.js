"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json({
  limit: '200mb'
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json({
  limit: '200mb'
}));
app.get('/', function (req, res) {
  res.send('not only hello world yeah it is not the only');
});
app.post('/:route', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var handler;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("am from trial");
          handler = require("./controller/".concat(req.params.route));
          console.log('from here handler');
          _context.t0 = console;
          _context.next = 7;
          return handler;
        case 7:
          _context.t1 = _context.sent;
          _context.t0.log.call(_context.t0, _context.t1);
          if (handler) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'path not found'
          }));
        case 11:
          handler(req, res);
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t2 = _context["catch"](0);
          console.log(_context.t2);
          return _context.abrupt("return", res.status(400).json({
            message: 'unexpected error occurred' + _context.t2
          }));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/event/:route', function (req, res) {
  try {
    console.log('from here');
    var handler = require("./events/".concat(req.params.route));
    if (!handler) {
      return res.status(400).json({
        message: 'path not found'
      });
    }
    handler(req, res);
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      message: 'unexpected error occurred'
    });
  }
});
app.listen(3000, function () {
  console.log('on the moon');
});
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Unofficial node.js library for Chapa API
 * author: github.com/fuadhy
 */

//  const fetch = require('node-fetch')
var _require = require('uuid'),
  uuidv4 = _require.v4,
  v4 = _require.v4;
var BASE_URL = 'https://api.chapa.co/v1';
var INTIALIZE_PATH = '/transaction/initialize';
var VERIFY_PATH = '/transaction/verify/';
function Chapa(secret_key) {
  this.secret_key = secret_key;
}

/**
 * 
 * @param {object} customerInfo customer information, refer: https://developer.chapa.co/docs/accept-payments/
 * @param {object} [options]
 * 
 * @returns Promise
 */
Chapa.prototype.initialize = function (customerInfo) {
  var _this = this;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var required_fields = ['amount', 'currency', 'email', 'first_name', 'last_name'];
  var errors = [];
  required_fields.forEach(function (field) {
    if (!customerInfo[field]) errors.push('field: ' + field + ' is required!');
  });
  if (!options.autoRef && !customerInfo['tx_ref']) errors.push('field: tx_ref is required! or pass \'{autoRef: true}\' to the options');
  if (errors.length) throw new Error(errors);
  Object.keys(customerInfo.customization || {}).forEach(function (field) {
    customerInfo["customization[".concat(field, "]")] = customerInfo.customization[field];
  });
  delete customerInfo.customization;
  return new Promise(function (resolve, reject) {
    var tx_ref = customerInfo.tx_ref || v4();
    fetch(BASE_URL + INTIALIZE_PATH, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _this.secret_key
      },
      body: JSON.stringify(_objectSpread(_objectSpread({}, customerInfo), {}, {
        tx_ref: tx_ref
      }))
    }).then( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(response) {
        var apiResponse;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return response.json();
            case 2:
              apiResponse = _context.sent;
              apiResponse = _objectSpread(_objectSpread({}, apiResponse), {}, {
                tx_ref: tx_ref
              });
              if (!(response.status != 200)) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", reject(apiResponse));
            case 6:
              resolve(apiResponse);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"](function (e) {
      return reject(e);
    });
  });
};

/**
 * 
 * @param {string} txnRef transaction reference, refer https://developer.chapa.co/docs/verify-payments/
 * @returns Promise
 */
Chapa.prototype.verify = function (txnRef) {
  var _this2 = this;
  if (!txnRef) throw new Error('Transaction reference is required!');
  return new Promise(function (resolve, reject) {
    fetch(BASE_URL + VERIFY_PATH + txnRef, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + _this2.secret_key
      }
    }).then( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(response) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(response.status != 200)) {
                _context2.next = 6;
                break;
              }
              _context2.t0 = reject;
              _context2.next = 4;
              return response.json();
            case 4:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", (0, _context2.t0)(_context2.t1));
            case 6:
              _context2.t2 = resolve;
              _context2.next = 9;
              return response.json();
            case 9:
              _context2.t3 = _context2.sent;
              (0, _context2.t2)(_context2.t3);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }())["catch"](function (e) {
      return reject(e);
    });
  });
};
module.exports = Chapa;
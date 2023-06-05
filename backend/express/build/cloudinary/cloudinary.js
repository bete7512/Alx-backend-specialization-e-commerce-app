"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _cloudinary = _interopRequireDefault(require("cloudinary"));
_cloudinary["default"].config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'free-version-image-cloud',
  api_key: process.env.CLOUDINARY_API_KEY || '975767954323924',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'h5egu4prjEAQeVmF3sPgUp3Nif8'
});
module.exports = _cloudinary["default"];
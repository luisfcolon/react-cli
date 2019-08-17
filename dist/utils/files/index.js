"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function writeComponentFile(filename, content, path) {
  _fs["default"].writeFile(filename, content, function (error) {
    if (error) {
      return console.log(error);
    }

    console.log("".concat(filename, " was saved."));
  });
}

var _default = writeComponentFile;
exports["default"] = _default;
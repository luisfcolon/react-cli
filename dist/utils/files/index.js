'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function writeComponentFile(filename, content, path) {
  _fs2.default.writeFile(filename, content, function (error) {
    if (error) {
      return console.log(error);
    }

    console.log(filename + ' was saved.');
  });
}

exports.default = writeComponentFile;
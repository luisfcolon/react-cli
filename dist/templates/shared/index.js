'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var propsImport = '\n\nimport PropTypes from \'prop-types\'';

var exportComponent = function exportComponent(name) {
  return 'export default ' + name;
};

exports.exportComponent = exportComponent;
exports.propsImport = propsImport;
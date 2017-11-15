'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var h = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var propsString = function propsString(name) {
  return '\n' + name + '.defaultProps = {};\n\n' + name + '.propTypes = {};\n';
};

var statelessFunctional = function statelessFunctional(componentName, withProps) {
  return 'import React from \'react\';' + (withProps ? h.propsImport : '') + '\n\n\nconst ' + componentName + ' = ' + (withProps ? 'props' : '()') + ' => (\n  <div className="component" />\n);\n' + (withProps ? propsString(componentName) : '') + '\nexport default ' + componentName + ';\n\n';
};

exports.default = statelessFunctional;
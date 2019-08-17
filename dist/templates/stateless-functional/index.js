"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var h = _interopRequireWildcard(require("../helpers"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var propsString = function propsString(name) {
  return "\n".concat(name, ".defaultProps = {};\n\n").concat(name, ".propTypes = {};\n");
};

var statelessFunctional = function statelessFunctional(componentName, withProps) {
  return "import React from 'react';".concat(withProps ? h.propsImport : '', "\n\n\nconst ").concat(componentName, " = ").concat(withProps ? 'props' : '()', " => (\n  <div className=\"component\" />\n);\n").concat(withProps ? propsString(componentName) : '', "\nexport default ").concat(componentName, ";\n\n");
};

var _default = statelessFunctional;
exports["default"] = _default;
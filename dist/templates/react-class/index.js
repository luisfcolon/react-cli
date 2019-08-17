"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var h = _interopRequireWildcard(require("../helpers"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var propsString = '\n  static defaultProps = {};\n\n  static propTypes = {};\n';

var reactClass = function reactClass(componentName, withProps) {
  return "import React from 'react';".concat(withProps ? h.propsImport : '', "\n\n\nclass ").concat(componentName, " extends React.Component {").concat(withProps ? propsString : '', "\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <div className=\"component\" />\n    );\n  }\n}\n\nexport default ").concat(componentName, ";\n\n");
};

var _default = reactClass;
exports["default"] = _default;
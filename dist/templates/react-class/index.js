'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var h = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var propsString = '\n  static defaultProps = {};\n\n  static propTypes = {};\n';

var reactClass = function reactClass(componentName, withProps) {
  return 'import React from \'react\';' + (withProps ? h.propsImport : '') + '\n\n\nclass ' + componentName + ' extends React.Component {' + (withProps ? propsString : '') + '\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <div className="component" />\n    );\n  }\n}\n\nexport default ' + componentName + ';\n\n';
};

exports.default = reactClass;
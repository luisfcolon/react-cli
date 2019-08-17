#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _files = _interopRequireDefault(require("./utils/files"));

var t = _interopRequireWildcard(require("./templates"));

var _package = require("../package.json");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_commander["default"].version(_package.version).description('Create react components').usage('<command> <ComponentName> [options]').option('-d, --output-dir [dir]', 'output directory').option('-p, --with-props', 'with props');

_commander["default"].command('make:class <ComponentName>').description('Create class based component').action(function (componentName) {
  var path = _commander["default"].outputDir;
  var withProps = _commander["default"].withProps;
  var filename = "".concat(componentName, ".js");
  var content = t.reactClass(componentName, withProps);
  (0, _files["default"])(filename, content, path);
});

_commander["default"].command('make:functional <ComponentName>').description('Create stateless functional component').action(function (componentName) {
  var path = _commander["default"].outputDir;
  var withProps = _commander["default"].withProps;
  var filename = "".concat(componentName, ".js");
  var content = t.statelessFunctional(componentName, withProps);
  (0, _files["default"])(filename, content, path);
});

_commander["default"].parse(process.argv);
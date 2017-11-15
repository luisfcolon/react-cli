#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _files = require('./utils/files');

var _files2 = _interopRequireDefault(_files);

var _templates = require('./templates');

var t = _interopRequireWildcard(_templates);

var _package = require('../package.json');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package.version).description('Create react components').usage('<command> <ComponentName> [options]').option('-d, --output-dir [dir]', 'output directory').option('-p, --with-props', 'with props');

_commander2.default.command('make:class <ComponentName>').description('Create class based component').action(function (componentName) {
  var path = _commander2.default.outputDir;
  var withProps = _commander2.default.withProps;
  var filename = componentName + '.js';
  var content = t.reactClass(componentName, withProps);
  (0, _files2.default)(filename, content, path);
});

_commander2.default.command('make:functional <ComponentName>').description('Create stateless functional component').action(function (componentName) {
  var path = _commander2.default.outputDir;
  var withProps = _commander2.default.withProps;
  var filename = componentName + '.js';
  var content = t.statelessFunctional(componentName, withProps);
  (0, _files2.default)(filename, content, path);
});

_commander2.default.parse(process.argv);
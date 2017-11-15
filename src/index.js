#!/usr/bin/env node --harmony

import mustache from 'mustache';
import path from 'path';
import program from 'commander'

import { writeComponentFile } from './utils/files';
import * as t from './templates';

import { version } from '../package.json'

program
  .version(version)
  .description('Create react components')
  .usage('<command> <ComponentName> [options]')
  .option('-d, --output-dir [dir]', 'output directory')
  .option('-p, --with-props', 'with props')

program
  .command('make:class <ComponentName>')
  .description('Create class based component')
  .action((componentName) => {
    const path = program.outputDir;
    const withProps = program.withProps;
    const filename = `${componentName}.js`;
    const content = t.reactClass(componentName, withProps);
    writeComponentFile(filename, content, path);
  });

program
  .command('make:functional <ComponentName>')
  .description('Create stateless functional component')
  .action((componentName) => {
    const path = program.outputDir;
    const withProps = program.withProps;
    const filename = `${componentName}.js`;
    const content = t.statelessFunctional(componentName, withProps);
    writeComponentFile(filename, content, path);
  });

program.parse(process.argv);

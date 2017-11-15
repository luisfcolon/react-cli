import * as h from '../helpers';

const propsString = name => (`
${name}.defaultProps = {};

${name}.propTypes = {};
`);

const statelessFunctional = (componentName, withProps) => (
`import React from 'react';${withProps ? h.propsImport : ''}


const ${componentName} = ${withProps ? 'props' : '()'} => (
  <div className="component" />
);
${withProps ? propsString(componentName) : ''}
export default ${componentName};

`);

export default statelessFunctional;

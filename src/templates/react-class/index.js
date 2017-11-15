import * as h from '../helpers';

const propsString = '\n  static defaultProps = {};\n\n  static propTypes = {};\n';

const reactClass = (componentName, withProps) => (
`import React from 'react';${withProps ? h.propsImport : ''}


class ${componentName} extends React.Component {${withProps ? propsString : ''}
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component" />
    );
  }
}

export default ${componentName};

`);

export default reactClass;

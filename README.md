# react-cli

CLI tool to create react components. Stateless functional or class extended.

__Work in progress__

## Usage

### React class component

```bash
react-cli make:class ComponentName
```

Output `ComponentName.js`

```javascript
import React from 'react';


class ComponentName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component" />
    );
  }
}

export default ComponentName;
```

With props:

```bash
react-cli make:class ComponentName -p
```

Output `ComponentName.js`

```javascript
import React from 'react';

import PropTypes from 'prop-types';


class ComponentName extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component" />
    );
  }
}

export default ComponentName;
```

### Stateless functional component

```bash
react-cli make:functional ComponentName
```

Output `ComponentName.js`

```javascript
import React from 'react';


const ComponentName = () => (
  <div className="component" />
);

export default ComponentName;
```

With props:

```bash
react-cli make:functional ComponentName -p
```

Output `ComponentName.js`

```javascript
import React from 'react';

import PropTypes from 'prop-types';


const ComponentName = props => (
  <div className="component" />
);

ComponentName.defaultProps = {};

ComponentName.propTypes = {};

export default ComponentName;
```

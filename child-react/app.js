import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];

    return ([
        <h1>
          Micro Frontend React
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>,
        <p>
          React Version: {reactVersion}
        </p>
    ])
  }
}

class ChildReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('child-react-element', ChildReactElement);
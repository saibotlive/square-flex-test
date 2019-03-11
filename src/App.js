import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './App.styles';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Content />
      </Fragment>
    );
  }
}

export default App;

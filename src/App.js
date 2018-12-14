import React, { Component } from 'react';
import OldCounter from './components/OldCounter';
import Counter from './components/UseState';
import OldLife from './components/OldLifecycle';
import NewLife from './components/NewLife';
import Reducer from './components/Reducer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OldCounter />
        <Counter />
        <OldLife />
        <NewLife />
        <Reducer />
      </div>
    );
  }
}

export default App;

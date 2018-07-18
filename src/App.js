import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleClick = () => this.setState({ counter: this.state.counter + 1 })
  render() {
    const { counter } = this.state;
    return (
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <button data-test="increment-button" onClick={this.handleClick}>Increment Counter</button>
      </div>
    );
  }
}

export default App;

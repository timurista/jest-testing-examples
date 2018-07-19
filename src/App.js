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

  handleClick = (incrementer: number) => () => {
    const { counter } = this.state;
    if (counter + incrementer >= 0) {
      this.setState({ counter: counter + incrementer, error: null })
    } else {
      this.setState({ error: 'Error: counter cant go below zero' })
    }
  }

  render() {
    const { counter, error } = this.state;
    const counterMessage = `The counter is currently ${counter}`;
    return (
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">{counterMessage}</h1>
        <button data-test="increment-button" onClick={this.handleClick(1)}>Increment Counter</button>
        <button data-test="decrement-button" onClick={this.handleClick(-1)}>Decrement Counter</button>
        {error && <p data-test="error">{error}</p>}
      </div>
    );
  }
}

export default App;

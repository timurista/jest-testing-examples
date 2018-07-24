import React, { Component } from 'react';
import './App.css';
import GuesedWords from './components/guessed-words'
import Congrats from './components/congrats'

class App extends Component {
  render() {
    return (
      <div data-test="component-app" className="App">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuesedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App;

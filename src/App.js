import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import GuesedWords from './components/guessed-words'
import Congrats from './components/congrats'
import Input from './components/input'
import { getSecretWord } from './actions'

class App extends Component {
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuesedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}
export default connect(mapStateToProps, { getSecretWord })(App);

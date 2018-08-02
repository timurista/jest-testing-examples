// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import GuesedWords from './components/guessed-words'
import Congrats from './components/congrats'
import Input from './components/input'
import NewWord from './components/new-word'
import GiveUp from './components/give-up'
import { getSecretWord } from './actions'

export type Props = {
  getSecretWord: any => any,
  success: boolean,
  guessedWords: any[],
  secretWord: string,
}
export class UnconnectedApp extends Component<Props> {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;
    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>        
        <Congrats success={success} />
        <div className="row">
          <Input /><GiveUp />
        </div>
        <NewWord />
        <GuesedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);

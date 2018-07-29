import { combineReducers } from 'redux';
import success from './success-reducer';
import guessedWords from './guessed-words-reducer';
import secretWord from './secret-word-reducer';


export default combineReducers({
  success,
  guessedWords,
  secretWord
})
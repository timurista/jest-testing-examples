import { combineReducers } from 'redux';
import success from './success-reducer';
import guessedWords from './guessed-words-reducer';


export default combineReducers({
  success,
  guessedWords
})
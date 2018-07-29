import { combineReducers } from 'redux';
import success from './success-reducer';
import guessWord from './guess-word-reducer';


export default combineReducers({
  success,
  guessWord
})
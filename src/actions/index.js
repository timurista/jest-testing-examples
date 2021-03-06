import axios from 'axios';
import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  SET_SUCCESS: 'SET_SUCCESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GUESSED_WORDS: 'RESET_GUESSED_WORDS',
  GAME_OVER: 'GAME_OVER',
}

export const reset = () => {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.SET_SUCCESS, payload: false })
    dispatch({ type: actionTypes.RESET_GUESSED_WORDS })
    dispatch({ type: actionTypes.GAME_OVER, payload: false })
    return getWordFromServer(dispatch);
  }
}

export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });


    if(guessedWord === secretWord) {
      dispatch({ type: actionTypes.SET_SUCCESS, payload: true })
      dispatch({ type: actionTypes.GAME_OVER })
    }
  };
};

const getWordFromServer = (dispatch) => {
  return axios.get('http://localhost:3030')
  .then(response => {
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: response.data
    })
  });
}

export const endGame = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.GAME_OVER })
  } 
}

export const getSecretWord = () => {
  return (dispatch) => {
    return getWordFromServer(dispatch)
  }
}

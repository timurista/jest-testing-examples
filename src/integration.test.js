import { storeFactory } from './test/test-utils';
import { guessWord, reset } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words here', () => {
    let store;
    const initialState = { secretWord }
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    it('updates state for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
      }
      expect(newState).toEqual(expectedState)
    })

    it('updates state for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ 
          guessedWord: secretWord, 
          letterMatchCount: secretWord.length
        }]
      }
      expect(newState).toEqual(expectedState)
    })

    it('calling reset resets the game', () => {
      store.dispatch(guessWord(secretWord));
      store.dispatch(reset());
      const newState = store.getState();
      expect(newState).toEqual({
        success: false,
        guessedWords: [],
        secretWord: "party"
      });
    })
  })

  describe('some guessed words here', () => {
    const guessedWords = [{
      guessedWord: 'agile',
      letterMatchCount: 1,
    }]
    const initialState = { guessedWords, secretWord }
    let store;
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    it('updates state for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [...guessedWords, { 
          guessedWord: unsuccessfulGuess, 
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState);        
    })

    it('updates state for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [...guessedWords, {
          guessedWord: secretWord,
          letterMatchCount: secretWord.length
        }]
      }
      expect(newState).toEqual(expectedState)
    })
  })
})


import { storeFactory } from './test/test-utils';
import { guessWord } from './actions';

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
      
    })
  })

  describe('some guessed words here', () => {
    it('updates state for unsuccessful guess', () => {

    })

    it('updates state for successful guess', () => {
      
    })
  })
})


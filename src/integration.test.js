import moxios from 'moxios';
import { storeFactory } from './test/test-utils';
import { guessWord, reset } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words here', () => {
    let store;
    const initialState = { secretWord, gameOver: false }
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
        gameOver: true,
        guessedWords: [{ 
          guessedWord: secretWord, 
          letterMatchCount: secretWord.length
        }]
      }
      expect(newState).toEqual(expectedState)
    })

    describe('reseting the game', () => {
      beforeEach(() => {
        moxios.install();
      })
    
      afterEach(() => {
        moxios.uninstall();
      });
    
      it('calling reset resets the game', async () => {
        store.dispatch(guessWord(secretWord));


        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'lemon',
          })
        })
        await store.dispatch(reset());

        const newState = store.getState();
        expect(newState).toEqual({
          success: false,
          gameOver: false,
          guessedWords: [],
          secretWord: "lemon"
        });
      })
    })

  })

  describe('some guessed words here', () => {
    const guessedWords = [{
      guessedWord: 'agile',
      letterMatchCount: 1,
    }]
    const initialState = { guessedWords, secretWord, gameOver: false }
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
        gameOver: false,
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
        gameOver: true,
        guessedWords: [...guessedWords, {
          guessedWord: secretWord,
          letterMatchCount: secretWord.length
        }]
      }
      expect(newState).toEqual(expectedState)
    })
  })
})


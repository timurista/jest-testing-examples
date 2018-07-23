// @flow
import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../test/test-utils';
import GuessedWords from './'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<GuessedWords {...setupProps}/>)
}

describe('GuessedWords', () => {
  it('renders without warning', () => {
    const wrapper = setup();
    expect(wrapper).toBeDefined();
  })

  describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup({ guessedWords: []})
    })
    it('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words')
      expect(component).toHaveLength(1)
    })
    it('renders instructions to a guessed word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions')
      expect(instructions.text()).toBe('Try to guess the secret word!')
    })

  })

  describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 }
    ]
    beforeEach(() => {
      wrapper = setup({ guessedWords })
    })
    it('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words')
      expect(component).toHaveLength(1)
    })
    it('renders guessed words section', () => {
      const guessedWordsDiv = findByTestAttr(wrapper, 'guessed-words');
      expect(guessedWordsDiv).toHaveLength(1)
    })
    it('renders correct number of guessed words section', () => {
      const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordsNodes).toHaveLength(guessedWords.length)
    })

  })
})
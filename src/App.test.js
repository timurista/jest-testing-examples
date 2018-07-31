import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

import { storeFactory } from './test/test-utils';

const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
}

describe('redux props', () => {
  it('has access to the success state', () => {
    const success = true;
    const wrapper = setup({ success });
    expect(wrapper.instance().props.success).toBe(success);
  })

  it('has access to secret word state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    expect(wrapper.instance().props.secretWord).toBe(secretWord);
  })

  it('has access to guessedWords prop', () => {
    const guessedWords = [{
      guessedWord: 'train',
      letterMatchCount: 3,
    }];
    const wrapper = setup({ guessedWords });
    expect(wrapper.instance().props.guessedWords).toEqual(guessedWords);
  })

  it('getSecretWord is action creator on function', () => {
    const wrapper = setup();
    expect(wrapper.instance().props.getSecretWord).toBeInstanceOf(Function);
  })
})


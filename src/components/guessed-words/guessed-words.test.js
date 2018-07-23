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
  console.log('setupProps')
  return shallow(<GuessedWords {...setupProps}/>)
}

describe('GuessedWords', () => {
  it('renders without warning', () => {
    const wrapper = setup();
    expect(wrapper).toBeDefined();
  })
})
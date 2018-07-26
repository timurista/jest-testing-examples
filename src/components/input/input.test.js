import React from 'react';
import { shallow } from 'enzyme';

import { findByTesId, storeFactory } from '../../test/test-utils'
import Input from './'

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store}/>);
  console.log(wrapper.debug())
}

setup()

describe('Input', () => {
  describe('render', () => {
    describe('word has not been guesed', () => {
      it('renders without error', () => {

      })
      it('renders input box', () => {
        
      })
      it('renders submit button', () => {
        
      })
    })
    describe('word has been guesed', () => {
      it('renders without error', () => {

      })
      it('does not render input box', () => {
        
      })
      it('does not render submit button', () => {
        
      })      
    })
  })

  describe('update state', () => {
    
  })
})
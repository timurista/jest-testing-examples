import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/test-utils'
import Input from './'

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store}/>).dive();
  return wrapper;
}

setup()

describe('Input', () => {
  describe('render', () => {
    describe('word has not been guesed', () => {
      let wrapper;
      beforeEach(() => {
        const initialState = { success: false };
        wrapper = setup(initialState);
      })
      it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-input')        
        expect(component).toHaveLength(1)
      })
      it('renders input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box')
        expect(inputBox).toHaveLength(1)        
      })
      it('renders submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button')
        expect(submitButton).toHaveLength(1)           
      })
    })
    describe('word has been guesed', () => {
      let wrapper;
      beforeEach(() => {
        const initialState = { success: true }
        wrapper = setup(initialState)
      })
      it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-input')        
        expect(component).toHaveLength(1)
      })
      it('does not render input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box')
        expect(inputBox).toHaveLength(0)          
      })
      it('does not render submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button')
        expect(submitButton).toHaveLength(0) 
      })      
    })
  })

  describe('update state', () => {
    
  })
})
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/test-utils'
import { UnconnectedNewWord } from './'

const setup = (props={}) => {
  const defaultProps = {
    success: true
  };
  return shallow(<UnconnectedNewWord { ...{...defaultProps, ...props }} />)
}

it('render button with new word when success is true', () => {
  const wrapper = setup();
  expect(findByTestAttr(wrapper, 'new-word-button')).toHaveLength(1);
})

it('does not render button with new word when no success', () => {
  const wrapper = setup({ success: false });
  expect(findByTestAttr(wrapper, 'new-word-button')).toHaveLength(0);
})

it('clicking button triggers reset', () => {
  const reset = jest.fn();
  const wrapper = setup({ reset });
  findByTestAttr(wrapper, 'new-word-button').simulate('click');
  expect(reset).toHaveBeenCalled()

})
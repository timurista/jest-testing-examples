import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/test-utils'
import { UnconnectedGiveUp } from './'

const setup = (props={}) => {
  const defaultProps = {
    gameOver: false
  };
  return shallow(<UnconnectedGiveUp { ...{...defaultProps, ...props }} />)
}


it('renders give up button normally', () => {
  const wrapper = setup()
  const giveUp = findByTestAttr(wrapper, 'give-up-button');
  expect(giveUp).toHaveLength(1);
})

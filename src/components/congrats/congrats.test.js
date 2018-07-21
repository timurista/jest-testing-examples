// @flow

import React from 'react'
import { shallow } from 'enzyme'
import Congrats from './'
import { findByTestAttr } from '../../test/test-utils'

const defaultProps = { success: false };

describe('Congrats message', () => {
  const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps}/>)
  }

  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component).toHaveLength(1);
  })

  it('renders no text when `success` is false', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
  })

  it('renders non-empty success message', () => {
    const wrapper = setup({ success: true })
    const message = findByTestAttr(wrapper, 'congrats-message')
    expect(message.text()).not.toHaveLength(0)
  })

})

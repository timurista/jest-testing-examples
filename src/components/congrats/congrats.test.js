import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Congrats from './'
import { findByTestAttr} from '../../test/test-utils'

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Congrats message', () => {
  const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
  }
  it('renders without error', () => {})

  it('renders no text when `success` is false', () => {})

  it('renders non-empty success message', () => {})

})

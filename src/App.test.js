import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a Shallow wrapper for App component
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

it('renders without an error', () => {
  const wrapper = setup();
  expect(findByTestAttr(wrapper, "component-app")).toHaveLength(1);
});

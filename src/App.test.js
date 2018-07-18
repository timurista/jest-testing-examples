import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a Shallow wrapper for App component
 */
const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}

/**
 * Shallow wrapper containing nodes with given data-test value
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

it('renders without an error', () => {
  const wrapper = setup();
  expect(findByTestAttr(wrapper, "component-app")).toHaveLength(1);
});

// test button
it('renders increment button', () => {
  const wrapper = setup();
  expect(findByTestAttr(wrapper, "increment-button")).toHaveLength(1);
})

it('renders counter display', () => {
  const wrapper = setup();
  expect(findByTestAttr(wrapper, "counter-display")).toHaveLength(1);

})

it('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0)
})

it('clicking button increments counter display', () => {

})
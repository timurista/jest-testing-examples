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
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, "increment-button")
  button.simulate('click');
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1)
})

it('clicking the decrement button decrements the counter display', () => {
  const wrapper = setup(null);
  wrapper.setState({ counter: 3 })
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')
  expect(findByTestAttr(wrapper, "counter-display").text()).toContain(2)
})

it('counter cannot go below 0', () => {
  const wrapper = setup(null);
  wrapper.setState({ counter: 0 })
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')
  expect(findByTestAttr(wrapper, "error").text()).toContain("Error: counter cant go below zero")
})

it('incrementing button clears error after clicking', () => {
  const wrapper = setup(null, { counter: -1 })
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')
  expect(findByTestAttr(wrapper, "error")).toHaveLength(0)
})
// @flow
import type {ShallowWrapper} from 'enzyme'
import { createStore } from 'redux'
import rootReducer from '../../src/reducers';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState)
}

export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
  return wrapper.find(`[data-test-id="${val}"]`)
}


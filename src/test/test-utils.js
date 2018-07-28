// @flow
import type {ShallowWrapper} from 'enzyme'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../../src/reducers';
import { middlewares } from '../configure-store'

export const storeFactory = (initialState: any) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}

export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
  return wrapper.find(`[data-test-id="${val}"]`)
}


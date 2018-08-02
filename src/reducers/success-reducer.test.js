import { actionTypes } from '../actions'
import success from './success-reducer'

test('returns default false when no action is passed', () => {
  const newState = success();
  expect(newState).toBe(false)
})

test('returns true when type correct guess is passed', () => {
  const newState = success(undefined, { type: actionTypes.SET_SUCCESS, payload: true });
  expect(newState).toBe(true)
})
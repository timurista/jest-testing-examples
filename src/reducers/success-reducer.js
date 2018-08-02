import { actionTypes } from '../actions'

export default (state=false, action = {}) => {  
  switch(action.type) {
    case actionTypes.SET_SUCCESS:
      return action.payload || false;
    default:
      return state   
  }
}
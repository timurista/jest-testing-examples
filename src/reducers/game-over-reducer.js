import { actionTypes } from '../actions';

export default (state=false, action = {}) => {  
  switch(action.type) {
    case actionTypes.GAME_OVER:
      if ('payload' in action) return action.payload;
      return true;
    default:
      return state   
  }
}
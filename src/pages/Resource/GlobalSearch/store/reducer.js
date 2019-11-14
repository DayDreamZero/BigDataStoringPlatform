import * as constants from './constants';

const defaultState = {
  current: 1,
  total: 0,
  data: []
};

export default(state=defaultState, action) => {
  if(action.type == constants.CHANGE_DATA){
    const newState = JSON.parse(JSON.stringify(state));
    newState.data = action.data;
    newState.total = action.total;
    return newState;
  }if(action.type == constants.CLEAR_TABLE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.data = [];
    newState.data = 0;
    return newState;
  }
  return state;
}
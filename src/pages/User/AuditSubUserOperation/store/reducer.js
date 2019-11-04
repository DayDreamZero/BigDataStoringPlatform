import * as constants from './constants';

const defaultState = {
   current: 1,
   total: 0,
   logs: [],
   startDate: '',
   endDate: '',
};

export default(state=defaultState, action) => {
  if(action.type == constants.CHANGELOG){
    const newState = JSON.parse(JSON.stringify(state));
    newState.logs = action.logs;
    newState.total = action.total;
    newState.startDate = action.startDate;
    newState.endDate = action.endDate;
    console.log(newState);
    return newState;
  }if(action.type == constants.CLEARTABLE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.logs = [];
    newState.total = 0;
    newState.startDate = '';
    newState.endDate = '';
    return newState;
  }
  return state;
}
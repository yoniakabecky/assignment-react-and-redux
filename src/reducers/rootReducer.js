import { combineReducers } from 'redux';
import issuesReducer from './issuesReducer';
import dialogReducer from './dialogReducer';

const rootReducer = combineReducers({
  issues: issuesReducer,
  dialog: dialogReducer
});

export default rootReducer;
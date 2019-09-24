import { combineReducers } from 'redux';
import issuesReducer from './issuesReducer';
import dialogReducer from './dialogReducer';
import editIssueReducer from './editIssueReducer';

const rootReducer = combineReducers({
  issues: issuesReducer,
  dialog: dialogReducer,
  data: editIssueReducer,
});

export default rootReducer;
import { DELETE_ISSUE, EDIT_ISSUE, ADD_ISSUE } from '../actions';
import { initialIssues } from './initialIssues';

const issuesReducer = (state = initialIssues, action) => {
  console.log("action.type", action)
  console.log("init state", state)
  switch (action.type) {
    case DELETE_ISSUE:
      let newIssues = state.issues.filter(issue => action.id !== issue.id);
      console.log('del', newIssues)
      return {
        ...state,
        issues: newIssues
      }
    case ADD_ISSUE:
      console.log('reducer add', action);
      let newIssue = state.issues.push(action)
      return {
        ...state,
        issues: newIssue
      }
    case EDIT_ISSUE:
      console.log('inside reducer')
      return state;
    default:
      return state;
  }
}

export default issuesReducer;

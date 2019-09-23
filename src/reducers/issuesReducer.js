import { DELETE_ISSUE, EDIT_ISSUE, ADD_ISSUE } from '../actions';
import { initialIssues } from './initialIssues';

const issuesReducer = (state = initialIssues, action) => {
  switch (action.type) {
    case DELETE_ISSUE:
      let newIssues = state.issues.filter(issue => action.id !== issue.id);
      return {
        ...state,
        issues: newIssues
      }
    case ADD_ISSUE:
      let newIssue = state.issues.push(action)
      return {
        ...state,
        issues: newIssue
      }
    case EDIT_ISSUE:
      return state;
    default:
      return state;
  }
}

export default issuesReducer;

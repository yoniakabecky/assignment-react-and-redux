import { DELETE_ISSUE, ADD_ISSUE, SET_DATA_AFTER_EDIT } from '../actions';
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
      let added = state.issues;
      added.push(action.issue);
      return {
        ...state,
        issues: added
      }
    case SET_DATA_AFTER_EDIT:
      let editedIssues = state.issues;
      const index = state.issues.findIndex(issue => action.issue.id === issue.id);
      editedIssues[index] = action.issue;
      return {
        ...state,
        issues: editedIssues
      }
    default:
      return state;
  }
}

export default issuesReducer;

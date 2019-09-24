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
      const added = [...state.issues, action.issue];
      return {
        ...state,
        issues: added
      }
    case SET_DATA_AFTER_EDIT:
      const index = state.issues.findIndex(issue => action.issue.id === issue.id);
      const editedIssues = [...state.issues];
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

import { SET_DATA_BEFORE_EDIT, CLEAR_EDIT_DATA } from '../actions/index';

const initialState = [];

const editIssueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_BEFORE_EDIT:
      return {
        ...state,
        issue: action.issue
      }
    case CLEAR_EDIT_DATA:
      return {
        ...state,
        issue: initialState,
      }
    default:
      return state;
  }
}

export default editIssueReducer;

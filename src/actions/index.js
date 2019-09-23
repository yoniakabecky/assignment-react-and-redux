export const DELETE_ISSUE = 'DELETE_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const ADD_ISSUE = 'ADD_ISSUE';
export const SET_FILTER = 'SET_FILTER';


export const deleteIssue = id => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ISSUE,
      id,
    });
  }
}

export const editIssue = issue => {
  return {
    type: EDIT_ISSUE,
    issue
  }
}

export const addIssue = issue => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_ISSUE,
      payload: issue
    });
  }
}

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  }
}
export const DELETE_ISSUE = 'DELETE_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const ADD_ISSUE = 'ADD_ISSUE';
export const SET_FILTER = 'SET_FILTER';
export const SET_DATA_BEFORE_EDIT = 'SET_DATA_BEFORE_EDIT';
export const SET_DATA_AFTER_EDIT = 'SET_DATA_AFTER_EDIT';
export const CLEAR_EDIT_DATA = 'CLEAR_EDIT_DATA';


export const deleteIssue = id => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ISSUE,
      id,
    });
  }
}

export const setDataBeforeEdit = issue => {
  return (dispatch) => {
    dispatch({
      type: SET_DATA_BEFORE_EDIT,
      issue,
    });
  }
}

export const setDataAfterEdit = issue => {
  return (dispatch) => {
    dispatch({
      type: SET_DATA_AFTER_EDIT,
      issue,
    })
  }
}

export const addIssue = issue => {
  return (dispatch) => {
    dispatch({
      type: ADD_ISSUE,
      issue,
    });
  }
}

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  }
}
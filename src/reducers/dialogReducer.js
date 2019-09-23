import { TOGGLE_EDIT_DIALOG, TOGGLE_ADD_DIALOG } from '../actions/dialogAction';

const initialState = {
  edit: false,
  add: false,
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_DIALOG:
      return {
        ...state,
        edit: !state.edit
      }
    case TOGGLE_ADD_DIALOG:
      return {
        ...state,
        add: !state.add
      }
    default:
      return state;
  }
}

export default dialogReducer;

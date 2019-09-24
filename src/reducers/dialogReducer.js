import {
  TOGGLE_EDIT_DIALOG,
  TOGGLE_ADD_DIALOG,
  TOGGLE_RELOAD_DIALOG
} from '../actions/dialogAction';

const initialState = {
  edit: false,
  add: false,
  reload: false,
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
    case TOGGLE_RELOAD_DIALOG:
      return {
        ...state,
        reload: !state.reload
      }
    default:
      return state;
  }
}

export default dialogReducer;

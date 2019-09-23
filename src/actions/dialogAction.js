export const TOGGLE_EDIT_DIALOG = "TOGGLE_EDIT_DIALOG";
export const TOGGLE_ADD_DIALOG = "TOGGLE_ADD_DIALOG";

export const toggleEditDialog = (isOpen) => {
  return {
    type: TOGGLE_EDIT_DIALOG,
    payload: isOpen
  }
}

export const toggleAddDialog = (isOpen) => {
  return {
    type: TOGGLE_ADD_DIALOG,
    payload: isOpen
  }
}
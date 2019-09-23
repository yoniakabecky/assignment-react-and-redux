import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleEditDialog } from '../../actions/dialogAction';

const EditDialog = (props) => {
  const handleClose = () => {
    props.toggleEditDialog(false);
  }

  return (
    <>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm">
        <DialogTitle id="form-dialog-title">Edit Issue</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            id="title"
            label="Title"
            type="text"
            required
            fullWidth
          />
          <TextField
            margin="normal"
            id="state"
            label="State"
            type="text"
            required
            fullWidth
          // helperText="0/10"
          />
          <TextField
            margin="normal"
            id="url"
            label="Url"
            type="text"
            fullWidth
          />
          <TextField
            margin="normal"
            id="created at"
            label="Created_at"
            type="text"
            fullWidth
          />
          <TextField
            margin="normal"
            id="updated at"
            label="Updated_at"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Save
          </Button>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    issue: state.issues,
    open: state.dialog.edit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditDialog: isOpen => dispatch(toggleEditDialog(isOpen)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog);

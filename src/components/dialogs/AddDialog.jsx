import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleAddDialog } from '../../actions/dialogAction';
import { addIssue } from '../../actions/index';
import uuid from 'uuid/v1';

const AddDialog = (props) => {

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");
  const [createdTime, setCreatedTime] = useState("");
  const [updatedTime, setUpdatedTime] = useState("");

  const handleClose = () => {
    props.toggleAddDialog(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIssue = {
      id: uuid(),
      title,
      status,
      url,
      createdTime,
      updatedTime,
    }
    console.log(newIssue);
    addIssue(newIssue);
    props.toggleAddDialog(false);
  }

  return (
    <>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm">
        <DialogTitle id="form-dialog-title">Add New Issue</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            id="title"
            label="Title"
            type="text"
            required
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="normal"
            id="state"
            label="State"
            type="text"
            required
            fullWidth
            // helperText="0/10"
            onChange={(e) => setStatus(e.target.value)}
          />
          <TextField
            margin="normal"
            id="url"
            label="Url"
            type="text"
            fullWidth
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            margin="normal"
            id="created at"
            label="Created_at"
            type="text"
            fullWidth
            onChange={(e) => setCreatedTime(e.target.value)}
          />
          <TextField
            margin="normal"
            id="updated at"
            label="Updated_at"
            type="text"
            fullWidth
            onChange={(e) => setUpdatedTime(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="default">
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
    open: state.dialog.add
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch', dispatch)
  return {
    addIssue: issue => dispatch(addIssue(issue)),
    toggleAddDialog: isOpen => dispatch(toggleAddDialog(isOpen)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDialog);

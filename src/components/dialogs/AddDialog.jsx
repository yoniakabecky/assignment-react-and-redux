import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, FormHelperText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { toggleAddDialog } from '../../actions/dialogAction';
import { addIssue } from '../../actions/index';
import uuid from 'uuid/v1';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#E91E63',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E91E63',
    },
  },
})(TextField);

const styles = {
  actionBtn: {
    justifyContent: "left",
    margin: "1.5rem",
  },
};


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

    props.addIssue(newIssue);
    props.toggleAddDialog(false);
  }

  return (
    <>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xs">
        <DialogTitle id="form-dialog-title">Add New Issue</DialogTitle>
        <DialogContent>
          <CssTextField
            margin="normal"
            id="title"
            label="Title"
            type="text"
            multiline
            rows="2"
            required
            fullWidth
            error={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormHelperText error={true} margin="dense">Required Field</FormHelperText>
          <CssTextField
            margin="normal"
            id="state"
            label="State"
            type="text"
            required
            fullWidth
            error={true}
            onChange={(e) => setStatus(e.target.value)}
          />
          <FormHelperText error={true} margin="dense">Required Field</FormHelperText>
          <CssTextField
            margin="normal"
            id="url"
            label="Url"
            type="text"
            fullWidth
            onChange={(e) => setUrl(e.target.value)}
          />
          <CssTextField
            margin="normal"
            id="created at"
            label="Created_at"
            type="text"
            fullWidth
            onChange={(e) => setCreatedTime(e.target.value)}
          />
          <CssTextField
            margin="normal"
            id="updated at"
            label="Updated_at"
            type="text"
            fullWidth
            onChange={(e) => setUpdatedTime(e.target.value)}
          />
        </DialogContent>
        <DialogActions style={styles.actionBtn}>
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
  return {
    addIssue: issue => dispatch(addIssue(issue)),
    toggleAddDialog: isOpen => dispatch(toggleAddDialog(isOpen)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDialog);

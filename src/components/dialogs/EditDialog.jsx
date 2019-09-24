import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { toggleEditDialog } from '../../actions/dialogAction';
import { setDataAfterEdit } from '../../actions/index';

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
  }
};

const EditDialog = (props) => {

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [updated_at, setUpdated_at] = useState("");

  useEffect(() => {
    setTitle(props.data.title);
    setStatus(props.data.state);
    setUrl(props.data.url);
    setCreated_at(props.data.created_at);
    setUpdated_at(props.data.updated_at);
  }, [props.data])

  const handleClose = () => {
    props.toggleEditDialog(false);
  }

  const handleChange = (e) => {
    e.preventDefault();

    const editedIssue = {
      id: props.data.id,
      title,
      state: status,
      url,
      created_at,
      updated_at,
    }

    props.setDataAfterEdit(editedIssue);
    handleClose();
  }

  if (!props.data) {
    return <></>;
  } else {
    return (
      <>
        <Dialog open={props.isOpen} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xs">
          <DialogTitle id="form-dialog-title">Issue id: {props.data.id}</DialogTitle>
          <DialogContent>
            <CssTextField
              margin="normal"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <CssTextField
              margin="normal"
              id="state"
              label="State"
              type="text"
              fullWidth
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <CssTextField
              margin="normal"
              id="url"
              label="Url"
              type="text"
              fullWidth
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <CssTextField
              margin="normal"
              id="created at"
              label="Created_at"
              type="text"
              fullWidth
              value={created_at}
              onChange={(e) => setCreated_at(e.target.value)}
            />
            <CssTextField
              margin="normal"
              id="updated at"
              label="Updated_at"
              type="text"
              fullWidth
              value={updated_at}
              onChange={(e) => setUpdated_at(e.target.value)}
            />
          </DialogContent>
          <DialogActions style={styles.actionBtn}>
            <Button onClick={handleChange} color="default">
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
}

const mapStateToProps = (state) => {
  return {
    data: state.data.issue,
    isOpen: state.dialog.edit

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditDialog: isOpen => dispatch(toggleEditDialog(isOpen)),
    setDataAfterEdit: issue => dispatch(setDataAfterEdit(issue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog);

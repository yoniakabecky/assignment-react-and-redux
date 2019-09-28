import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, FormHelperText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { toggleEditDialog } from '../../actions/dialogAction';
import { setDataAfterEdit } from '../../actions/index';
import moment from 'moment';

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

  const initialErrorMsg = {
    title: {
      msg: "",
      status: false,
    },
    status: {
      msg: "",
      status: false
    },
    isValidate: false,
  }
  const [title, setTitle] = useState(props.data.title);
  const [status, setStatus] = useState(props.data.state);
  const [url, setUrl] = useState(props.data.url);
  const [created_at, setCreated_at] = useState(props.data.created_at);
  const [errorMsg, setErrorMsg] = useState(initialErrorMsg);

  useEffect(() => {
    setTitle(props.data.title);
    setStatus(props.data.state);
    setUrl(props.data.url);
    setCreated_at(props.data.created_at);
  }, [props.data])

  const handleClose = () => {
    props.toggleEditDialog(false);
    setErrorMsg(initialErrorMsg);
  }

  const handleChange = (e) => {
    e.preventDefault();

    const updatedTime = moment().format('YYYY-MM-DD hh:mm:ss');

    const editedIssue = {
      id: props.data.id,
      title,
      state: status,
      url,
      created_at,
      updated_at: updatedTime,
    }

    if (errorMsg.isValidate) {
      props.setDataAfterEdit(editedIssue);
      handleClose();
    }
  }

  const validateInput = (type, value) => {
    const name = type === "title" ? "title" : "status";
    const requiredMsg = {
      msg: "Required Field",
      status: true,
    }

    if (value === "") {
      setErrorMsg({
        ...errorMsg,
        [name]: requiredMsg,
        isValidate: false,
      })
    } else {
      setErrorMsg({
        ...errorMsg,
        isValidate: true,
      })
    }
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
              autoFocus
              value={title}
              error={errorMsg.title.status}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => validateInput("title", title)}
            />
            <FormHelperText error={errorMsg.title.status} margin="dense">{errorMsg.title.msg}</FormHelperText>
            <CssTextField
              margin="normal"
              id="state"
              label="State"
              type="text"
              fullWidth
              value={status}
              error={errorMsg.status.status}
              onChange={(e) => setStatus(e.target.value)}
              onBlur={() => validateInput("status", status)}
            />
            <FormHelperText error={errorMsg.status.status} margin="dense">{errorMsg.status.msg}</FormHelperText>
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

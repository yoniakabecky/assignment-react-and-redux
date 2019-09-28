import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, FormHelperText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { toggleAddDialog } from '../../actions/dialogAction';
import { addIssue } from '../../actions/index';
import uuid from 'uuid/v1';
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
  },
};


const AddDialog = (props) => {

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
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState(initialErrorMsg);

  const handleClose = () => {
    setErrorMsg({
      title: {
        msg: "",
        status: false,
      },
      status: {
        msg: "",
        status: false
      },
      isValidate: false,
    })
    props.toggleAddDialog(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedTime = moment().format('YYYY-MM-DD hh:mm:ss');

    const newIssue = {
      id: uuid(),
      title,
      state: status,
      url,
      created_at: submittedTime,
      updated_at: submittedTime,
    }

    if (errorMsg.isValidate) {
      props.addIssue(newIssue);
      props.toggleAddDialog(false);
      setErrorMsg(initialErrorMsg);
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

  return (
    <>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div style={{ width: 400 }}>
          <DialogTitle id="form-dialog-title">Add New Issue</DialogTitle>
          <DialogContent>
            <CssTextField
              margin="normal"
              id="title"
              label="Title"
              type="text"
              required
              fullWidth
              autoFocus
              error={errorMsg.title.status}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => validateInput("title", title)}
            />
            <FormHelperText error={errorMsg.title.status} margin="dense">{errorMsg.title.msg}</FormHelperText>
            <CssTextField
              margin="normal"
              id="status"
              label="State"
              type="text"
              required
              fullWidth
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
              onChange={(e) => setUrl(e.target.value)}
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
        </div>
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

import React from 'react';
import { Dialog, DialogContent, DialogContentText, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleReloadDialog } from '../../actions/dialogAction';

const ReloadDialog = (props) => {

  const handleClose = () => {
    props.toggleReloadDialog(false)
  };

  return (
    <>
      <Dialog open={props.isOpen} onClose={handleClose}>
        <DialogContent style={{ textAlign: "center" }}>
          <DialogContentText>
            You clicked the reload button!!<br />
            Reloading data ...
          </DialogContentText>
          <CircularProgress color="secondary" style={{ margin: "1.5rem auto" }} />
        </DialogContent>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.dialog.reload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleReloadDialog: isOpen => dispatch(toggleReloadDialog(isOpen)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReloadDialog);

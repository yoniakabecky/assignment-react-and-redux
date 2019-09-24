import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import ReloadDialog from '../dialogs/ReloadDialog';
import { connect } from 'react-redux';
import { toggleReloadDialog } from '../../actions/dialogAction';

const styles = {
  title: {
    flexGrow: 1,
  },
  refreshBtn: {
    minWidth: "2rem",
  },
};


const Navbar = (props) => {

  const handleReload = () => {
    props.toggleReloadDialog(true);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={styles.title}>
            Angular 6 MatTable CRUD Example
          </Typography>
          Reload data:
          <Button color="inherit" style={styles.refreshBtn} onClick={handleReload}>
            <Refresh />
          </Button>
        </Toolbar>
      </AppBar>
      {props.isOpen ? <ReloadDialog /> : ""}
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

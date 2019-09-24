import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Tooltip, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Issues from './Issues';
import { connect } from 'react-redux';
import { toggleAddDialog } from '../../actions/dialogAction';
import EditDialog from '../dialogs/EditDialog';
import AddDialog from '../dialogs/AddDialog';

const headerContents = [
  "Id",
  "Title",
  "State",
  "Url",
  "Created at",
  "Updated at",
];

const styles = {
  roots: {
    width: "100vw",
  },
};


const IssuesList = (props) => {

  const handleClickOpen = () => {
    props.toggleAddDialog(true);
  }

  return (
    <Paper style={styles.roots}>
      <Table>
        <TableHead>
          <TableRow>
            {headerContents.map((header, index) => (
              <TableCell key={index} align="left">{header}</TableCell>
            ))}
            <TableCell align="left">
              <Tooltip title="Add">
                <IconButton color="primary" onClick={handleClickOpen} >
                  <Add />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Issues />
        </TableBody>
      </Table>
      {!props.data ? "" : <EditDialog />}
      <AddDialog />
    </Paper >
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.dialog.add,
    data: state.data.issue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddDialog: isOpen => dispatch(toggleAddDialog(isOpen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);

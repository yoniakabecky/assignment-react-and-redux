import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Tooltip, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Issues from './Issues';
import { connect } from 'react-redux';
import { toggleAddDialog } from '../../actions/dialogAction';


const IssuesList = (props) => {

  const handleClickOpen = () => {
    props.toggleAddDialog(true);
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">State</TableCell>
            <TableCell align="left">Url</TableCell>
            <TableCell align="left">Created at</TableCell>
            <TableCell align="left">Updated at</TableCell>
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
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.dialog.add,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddDialog: isOpen => dispatch(toggleAddDialog(isOpen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);

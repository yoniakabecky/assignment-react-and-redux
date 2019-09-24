import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Tooltip, IconButton, TablePagination } from '@material-ui/core';
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClickOpen = () => {
    props.toggleAddDialog(true);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let listLength = props.issues.length
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, listLength - page * rowsPerPage);


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
          <Issues issues={props.issues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
          {emptyRows > 0 && (
            <TableRow style={{ height: 49 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={listLength}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      {!props.data ? "" : <EditDialog />}
      <AddDialog />
    </Paper >
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.dialog.add,
    data: state.data.issue,
    issues: state.issues.issues,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddDialog: isOpen => dispatch(toggleAddDialog(isOpen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);

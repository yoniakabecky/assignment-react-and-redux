import React from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { Tooltip, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteIssue, setDataBeforeEdit } from '../../actions';
import { toggleEditDialog } from '../../actions/dialogAction';


const ActionButtons = (props) => {

  const handleEditClick = () => {
    props.toggleEditDialog(true);
    props.setDataBeforeEdit(props.issue);
  }

  const handleDeleteClick = () => {
    props.deleteIssue(props.issue.id);
  }

  return (
    <>
      <Tooltip title="Edit">
        <IconButton color="secondary" onClick={handleEditClick}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton color="secondary" onClick={handleDeleteClick}>
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    deleteIssue: id => dispatch(deleteIssue(id)),
    setDataBeforeEdit: issue => dispatch(setDataBeforeEdit(issue)),
    toggleEditDialog: isOpen => dispatch(toggleEditDialog(isOpen)),
  }
}

export default connect(null, mapDispatchToProps)(ActionButtons);

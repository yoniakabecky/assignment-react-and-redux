import React from 'react';
import { Edit, Delete } from '@material-ui/icons';
import { Tooltip, IconButton } from '@material-ui/core';

const ActionButtons = () => {
  return (
    <>
      <Tooltip title="Edit">
        <IconButton color="secondary">
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton color="secondary">
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default ActionButtons;
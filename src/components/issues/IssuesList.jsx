import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Tooltip, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Issues from './Issues';


const IssuesList = () => {
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
                <IconButton color="primary">
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

export default IssuesList;

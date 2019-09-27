import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import ActionButtons from './ActionButtons';


const Issues = (props) => {

  return (
    <>
      {props.issues.map(issue => (
        <TableRow key={issue.id}>
          <TableCell component="th">{issue.id}</TableCell>
          <TableCell style={{ width: "20vw" }}>{issue.title}</TableCell>
          <TableCell>{issue.state}</TableCell>
          <TableCell>{issue.url}</TableCell>
          <TableCell>{issue.created_at}</TableCell>
          <TableCell>{issue.updated_at}</TableCell>
          <TableCell>
            <ActionButtons issue={issue} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}


export default Issues;

import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import ActionButtons from './ActionButtons';
import { connect } from 'react-redux';

const styles = {
  title: {
    maxWidth: "20vw",
  },
  url: {
    // maxWidth: "20vw",
  },
};

const Issues = (props) => {
  return (
    <>
      {props.issues.map(issue => (
        <TableRow key={issue.id}>
          <TableCell component="th">{issue.id}</TableCell>
          <TableCell style={styles.title}>{issue.title}</TableCell>
          <TableCell>{issue.state}</TableCell>
          <TableCell style={styles.url}>{issue.url}</TableCell>
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

// get data from store
const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
  }
}

export default connect(mapStateToProps)(Issues);

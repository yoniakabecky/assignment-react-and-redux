import React, { Component } from 'react';
import axios from 'axios';
import { TableRow, TableCell } from '@material-ui/core';
import ActionButtons from './ActionButtons';

const styles = {
  title: {
    maxWidth: "20vw",
  },
  url: {
    // maxWidth: "20vw",
  },
};

class Issues extends Component {
  state = {
    issues: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/repos/reduxjs/redux/issues')
      .then(res => {
        this.setState({
          issues: res.data.slice(0, 10)
        })
      })
  }

  render() {
    return (
      <>
        {this.state.issues.map(issue => (
          <TableRow key={issue.id}>
            <TableCell component="th">{issue.id}</TableCell>
            <TableCell style={styles.title}>{issue.title}</TableCell>
            <TableCell>{issue.state}</TableCell>
            <TableCell style={styles.url}>{issue.url}</TableCell>
            <TableCell>{issue.created_at}</TableCell>
            <TableCell>{issue.updated_at}</TableCell>
            <TableCell>
              <ActionButtons />
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
}

export default Issues;

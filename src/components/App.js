import React from 'react';
import Navbar from './layouts/Navbar';
import IssuesList from './issues/IssuesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IssuesList />
    </div>
  );
}

export default App;

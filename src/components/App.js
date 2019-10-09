import React from 'react';
import Navbar from './layouts/Navbar';
import IssuesList from './issues/IssuesList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <IssuesList />
      <Test />
    </div>
  );
}

export default App;

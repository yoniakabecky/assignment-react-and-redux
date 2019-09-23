import React from 'react';
import Navbar from './layouts/Navbar';
import IssuesList from './issues/IssuesList';
import EditDialog from './dialogs/EditDialog';
import AddDialog from './dialogs/AddDialog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EditDialog />
      <AddDialog />
      <IssuesList />
    </div>
  );
}

export default App;

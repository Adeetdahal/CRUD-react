import React from 'react';
import Create from './components/create/Create';
import Read from './components/read/Read';
import Update from 'components/update/Update';
import Delete from 'components/delete/Delete';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Create />
      <Read />
      <Routes>
        <Route path="/create" component={<Create />} />
        <Route path="/read" component={<Read />} />
        <Route path="/update" component={<Update />} />
        <Route path="/delete" component={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;

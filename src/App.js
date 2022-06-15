import React from 'react';
import Create from './components/create/Create';
import Read from './components/read/Read';
import Update from './components/update/Update';
import Delete from './components/delete/Delete';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div
          className="flex justify-center mt-11
      ] "
        >
          <h1 className="text-4xl font-mono font-semibold">
            React CRUD operations
          </h1>
        </div>
        <Routes>
          {/* <Route index element={<Layout />} /> */}
          <Route path="/" element={<Layout />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

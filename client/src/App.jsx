import React from 'react';
import Navbar from './components/Navbar';
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/users' element={<ListUsers />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update' element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
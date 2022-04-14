import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/base/Nav';
import styled from 'styled-components'
import { Grid } from '@mui/material';

import Login from './views/core/Login';
import Dashboard from './views/Dashboard';
import Documents from './views/Documents';


function App() {
  


  return (
    <div className="App">
      <Router>
        <Nav>
          <Routes>
            <Route path='/' element={<Navigate to ='/dashboard' />} />
            <Route path='/login' element={ <Login /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
            <Route path='/documents' element={ <Documents /> } />
          </Routes>
        </Nav>
      </Router>
    </div>
  );
}

export default App;

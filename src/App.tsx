import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/base/Nav';
import styled from 'styled-components'
import { Grid } from '@mui/material';

import Login from './views/core/Login';
import Dashboard from './views/Dashboard';


function App() {
  


  return (
    <div className="App">
      <Router>
        <Nav>
          <Routes>
            <Route path='/login' element={ <Login /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
          </Routes>
        </Nav>
      </Router>
    </div>
  );
}

export default App;

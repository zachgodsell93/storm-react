import './App.css';
import Nav from './components/base/Nav';
import styled from 'styled-components'
import { Grid } from '@mui/material';
import Dashboard from './views/Dashboard';


function App() {
  


  return (
    <div className="App">
        <Nav>
          <Dashboard />
        </Nav>
    </div>
  );
}

export default App;

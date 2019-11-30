import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar  from './Components/Navbar/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Components/search/Search'
function App() {
  return (
    <MuiThemeProvider>
          <Navbar/>
          <Search/>
    </MuiThemeProvider>

  );
}

export default App;

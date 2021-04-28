import React from 'react';
import { Route , Switch } from "react-router-dom";
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;

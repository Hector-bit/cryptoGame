import React from 'react';
import { Route , Switch } from "react-router-dom";
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

//imports for components

import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/"></Route> */}
        <Route path = "/Login" component = {Login} />
        <Route path = "/SignUp" component = {SignUp} />
        <Sidebar/>
        <Main/>
      </Switch>
    </div>
  );
}

export default App;

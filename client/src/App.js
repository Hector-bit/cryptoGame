import React from 'react';
import { Route , Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import './App.css';

//imports for components

import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/"></Route> */}
        {/* <Route path = "/Login" component = {Login} />
        <Route path = "/SignUp" component = {SignUp} /> */}
        <Route path= "/" component = {Main} />
      </Switch>
    </div>
  );
}

export default App;

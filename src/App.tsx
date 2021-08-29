import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import './App.css';
import { SingIn } from './components/login/SingIn';

function App() {
  return (
    <Router>
    <div>    
      <Switch>
        <Route path="/">
          <SingIn/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

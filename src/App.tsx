import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import "./App.css";
import { SingIn } from "./components/login/SingIn";
import Header from "./components/header/index";

document.title = "HM Food";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
          <Route path="/SingIn">
            <SingIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

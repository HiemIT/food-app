import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import { SignIn } from "./components/login/SignIn";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" component={SignIn} exact />
      </Switch>

      <Footer />
    </>
  );
}

export default App;

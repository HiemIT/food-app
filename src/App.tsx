import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { SingIn } from "./components/login/SingIn";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" component={SingIn} exact />
      </Switch>

      <Footer />
    </>
  );
}

export default App;

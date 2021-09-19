import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
// import { SignIn } from "./components/login/SignIn";
import Shop from "./pages/shop/index";
import NotFound from "./pages/notFound/index";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Shop} exact />
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
      {/* <Route path="/" component={SignIn} exact /> */}
    </>
  );
}

export default App;

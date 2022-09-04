import React from "react";
import { withRouter, Route } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";

function App() {


  return (
    <div className="page">
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Footer />
    </div>

  );
}

export default withRouter(App);

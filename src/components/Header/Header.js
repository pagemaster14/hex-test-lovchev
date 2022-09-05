import React from "react";
import "./Header.css";
import { Route, Link } from "react-router-dom";
import logo from "../../images/3765104.jpeg";
import logo1 from "../../images/upload-34f3bff1-aa3a.png";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Hex" className="header__logo" />
      <div className="header__titlebox">
        <img src={logo1} alt="Логотип Hex-Team" className="header__titlebox-logo" />
        <h1 className="header__titlebox-title">Сервис сокращения ссылок</h1>
      </div>
      <div className="header__navigation">
        <Route exact path="/">
          <button className="header__navigation-button" onClick={props.signOut}>Выйти</button>
          <Link to="/login" className="header__navigation-link">Авторизация</Link>
          <Link to="/register" className="header__navigation-link">Регистрация</Link>
        </Route>
        <Route exact path="/login">
          <Link to="/register" className="header__navigation-link">Регистрация</Link>
        </Route>
        <Route exact path="/register">
          <Link to="/login" className="header__navigation-link">Авторизация</Link>
        </Route>
      </div>
    </header>
  );
}

export default Header;
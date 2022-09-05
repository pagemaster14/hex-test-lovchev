import React from "react";
import { withRouter, Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import * as auth from "../ulits/auth.js";
import * as api from "../ulits/api.js";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  const [loggedIn, setState] = React.useState(false);
  const [links, addLink] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
      api.getStatistics()
        .then((data) => {
          addLink(data);
        })
        .catch(err => err)
  }, [loggedIn])

  const [registerRequestStatus, setRegisterRequestStatus] = React.useState([]);
  function handleRegister({ username, password }) {
    setRegisterRequestStatus([]);
    auth.register(username, password)
    .then((res) => {
    history.push('/login');
  })
    .catch(err => {
      if (err === 'Ошибка: 400') {
        setRegisterRequestStatus(['Пользователь с данным именем уже зарегистрирован']);
      } else {
        setRegisterRequestStatus(['При регистрации пользователя произошла ошибка']);
      }
    })
  }

  const [loginRequestStatus, setLoginRequestStatus] = React.useState([]);
  function handleLogin({ username, password }) {
    setLoginRequestStatus([]);
    auth.authorize(username, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setState({
          loggedIn: true,
        })
        history.push('/');
      })
      .catch(err => {
        if (err === 'Ошибка: 400') {
          setLoginRequestStatus(['Вы ввели неправильный логин, или пароль']);
        } else {
          setLoginRequestStatus(['При авторизации произошла ошибка']);
        }
      })
  }

  function signOut() {
    setState(false);
    localStorage.removeItem("jwt");
    history.push('/login');
  }


  return (
    <div className="page">
      <Header signOut={signOut}/>
      <Switch>
      <ProtectedRoute exact path="/" component={Main} links={links} />
      <Route path="/register">
        <Register handleRegister={handleRegister} requestStatus={registerRequestStatus}/>
      </Route>
      <Route path="/login">
        <Login handleLogin={handleLogin} requestStatus={loginRequestStatus}/>
      </Route>
      </Switch>
      <Footer />
    </div>

  );
}

export default withRouter(App);

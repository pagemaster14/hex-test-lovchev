import React from "react";
import "./Login.css";
import "../Form/Form.css";
import { withRouter } from "react-router-dom";

function Login() {

    return (
        <>
            <main className="login">
                <h2 className="form__title">
                    Рады видеть!
                </h2>
                <form className="form" id="login">
                    <div className="form__input-container">
                        <p className="form__name">
                            Имя
                        </p>
                        <input className="form__input"></input>
                    </div>

                    <div className="form__input-container">
                        <p className="form__name">
                            Пароль
                        </p>
                        <input name="password"
                            type="password" className="form__input"></input>
                    </div>

                    <button className="form__button" type="submit">
                        Войти
                    </button>
                </form>

            </main>
        </>
    );
}

export default withRouter(Login);
import React from "react";
import "./Register.css";
import "../Form/Form.css";
import { withRouter } from "react-router-dom";

function Register() {

    return (
        <>
            <main className="register">
                <h2 className="form__title">
                    Добро пожаловать!
                </h2>
                <form className="form" id="register">
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
                        Зарегистрироваться
                    </button>
                </form>
                
            </main>
        </>
    );
}

export default withRouter(Register);
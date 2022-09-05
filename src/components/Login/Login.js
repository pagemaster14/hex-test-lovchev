import React from "react";
import "./Login.css";
import "../Form/Form.css";
import { withRouter } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useForm"

function Login({ handleLogin, isSending, requestStatus }) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
    const isDisabled = !isValid || isSending;
    const submitButtonClassName = `form__button ${isDisabled && "form__button_inactive"
        }`;

    function handleSubmit(evt) {
        evt.preventDefault();
        handleLogin(values);
    }

    React.useEffect(() => {
        resetForm({}, {}, false);
    }, [resetForm]);

    return (
        <>
            <main className="login">
                <h2 className="form__title">
                    Рады видеть! Пройдите авторизацию
                </h2>
                <form className="form" id="login" onSubmit={handleSubmit}
                    noValidate>
                    <div className="form__input-container">
                        <p className="form__name">
                            Имя
                        </p>
                        <input className={`form__input ${errors.username && "form__input_invalid"
                            }`} placeholder="Сергей" name="username"
                            type="username" value={values.username || ''}
                            required
                            onChange={handleChange}></input>
                        <span className="form__input-error" id="fullname-error">{errors.username || ''}</span>
                    </div>

                    <div className="form__input-container">
                        <p className="form__name">
                            Пароль
                        </p>
                        <input id="password"
                            value={values.password || ''}
                            name="password"
                            type="password" className={`form__input ${errors.password && "form__input_invalid"
                                }`}
                            required
                            onChange={handleChange}></input>
                        <span className="form__input-error" id="fullname-error">{errors.password || ''}</span>
                    </div>

                    <button type="submit" className={submitButtonClassName} disabled={isDisabled}>
                        Войти
                    </button>
                </form>
                <span className="form__api-response"
                >{requestStatus}</span>
            </main>
        </>
    );
}

export default withRouter(Login);
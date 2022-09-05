import React from "react";
import "./Register.css";
import "../Form/Form.css";
import { withRouter } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useForm";

function Register({ handleRegister, isSending, requestStatus }) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
    const isDisabled = !isValid || isSending;

    const submitButtonClassName = `form__button ${isDisabled && "form__button_inactive"
        }`;

    function handleSubmit(e) {
        e.preventDefault();
        handleRegister(values)
    }

    React.useEffect(() => {
        resetForm({}, {}, false);
    }, [resetForm]);

    return (
        <>
            <main className="register">
                <h2 className="form__title">
                    Добро пожаловать!
                </h2>
                <form className="form" id="register" onSubmit={handleSubmit} noValidate>
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
                        <input name="password"
                            type="password" className={`form__input ${errors.password && "form__input_invalid"
                                }`}
                            placeholder="••••••••••" value={values.password || ''}
                            required
                            onChange={handleChange}></input>
                        <span className="form__input-error" id="password-error">{errors.password || ''}</span>
                    </div>
                    <button type="submit" className={submitButtonClassName} disabled={isDisabled}>
                        Зарегистрироваться
                    </button>
                </form>
                <span
                    className="form__api-response"
                >{requestStatus}</span>

            </main>
        </>
    );
}

export default withRouter(Register);
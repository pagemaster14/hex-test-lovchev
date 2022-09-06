import React from "react";
import "./Main.css";
import "../Form/Form.css";
import LinkCard from "../LinkCard/LinkCard";
import { withRouter } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useForm"


function Main({ handleSqueeze, isSending, requestStatus, links }) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
    const isDisabled = !isValid || isSending;
    const submitButtonClassName = `form__button ${isDisabled && "form__button_inactive"
        }`;

    function handleSubmit(evt) {
        evt.preventDefault();
        handleSqueeze(values.link);
    }

    React.useEffect(() => {
        resetForm({}, {}, false);
    }, [resetForm]);

    const [linksToRender, setLinksToRender] = React.useState([]);

    React.useEffect(() => {
        if (links.length > 0) {
            if (links.length > 5) {
                setLinksToRender(links.slice(0, 5));
            } else {
                setLinksToRender(links);
            }
        }
    }, [links]);

    function handleMoreButtonClick() {
        setLinksToRender((state) => links.slice(0, state.length + 5));
    }

    return (
        <>
            <main className="main">
                <h2 className="form__title">
                    Введите адрес сайта
                </h2>
                <form className="form" id="link-squeeze" onSubmit={handleSubmit}>
                    <div className="form__input-container">
                    <input className={`form__input ${errors.link && "form__input_invalid"
                            }`} placeholder="www.hh.ru" name="link"
                            type="url" value={values.link || ''}
                            required
                            onChange={handleChange}></input>
                        <span className="form__input-error" id="fullname-error">{errors.link || ''}</span>
                    </div>
                    <button type="submit" className={submitButtonClassName} disabled={isDisabled}>
                        Сократить ссылку
                    </button>
                </form>
                <div className="main__table">
                    <h2 className="main__table-title">Короткая ссылка:</h2>
                    <h2 className="main__table-title">Исходная ссылка:</h2>
                    <h2 className="main__table-title">Количество переходов по короткой ссылке:</h2>
                </div>
                <div className="main__link-container">
                    {linksToRender.map((link) => (
                        <LinkCard
                            key={link.id}
                            shortlink={link.short}
                            link={link.target}
                            counter={link.counter}
                        />
                    ))}
                </div>
                <button className="main__button" onClick={handleMoreButtonClick}>Ещё больше ссылок</button>
            </main>
        </>
    );
}

export default withRouter(Main);
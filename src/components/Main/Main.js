import React from "react";
import "./Main.css";
import "../Form/Form.css";
import LinkCard from "../LinkCard/LinkCard";
import { withRouter } from "react-router-dom";


function Main() {

    return (
        <>
            <main className="main">
                <h2 className="form__title">
                    Введите адрес сайта
                </h2>
                <form className="form" id="link-squeeze">
                    <div className="form__input-container">
                        <input className="form__input"></input>
                    </div>
                    <button className="form__button" type="submit">
                        Сократить ссылку
                    </button>
                </form>
                <div className="main__table">
                    <h2 className="main__table-title">Короткая ссылка:</h2>
                    <h2 className="main__table-title">Исходная ссылка:</h2>
                    <h2 className="main__table-title">Количество переходов по короткой ссылке:</h2>
                </div>
                <div className="main__link-container">
                   <LinkCard shortlink="123" link="https://75mil7-dot-kinozal-guru.appspot.com/browse.php?sid=FCi6x1OS&page=9" counter="5" />
                   <LinkCard shortlink="123" link="https://75mil7-dot-kinozal-guru.appspot.com/browse.php?sid=FCi6x1OS&page=9" counter="5" /> 
                   <LinkCard shortlink="123" link="https://75mil7-dot-kinozal-guru.appspot.com/browse.php?sid=FCi6x1OS&page=9" counter="5" /> 
                   <LinkCard shortlink="123" link="https://75mil7-dot-kinozal-guru.appspot.com/browse.php?sid=FCi6x1OS&page=9" counter="5" /> 
                </div>

            </main>
        </>
    );
}

export default withRouter(Main);
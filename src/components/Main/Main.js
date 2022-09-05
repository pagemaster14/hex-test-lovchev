import React from "react";
import "./Main.css";
import "../Form/Form.css";
import LinkCard from "../LinkCard/LinkCard";
import { withRouter } from "react-router-dom";


function Main(props) {
    const [linksToRender, setLinksToRender] = React.useState([]);

    React.useEffect(() => {
        if (props.links.length > 0) {
            if (props.links.length > 5) {
                setLinksToRender(props.links.slice(0, 5));
            } else {
                setLinksToRender(props.links);
            }
        }
    }, [props.links]);

    function handleMoreButtonClick() {
        setLinksToRender((state) => props.links.slice(0, state.length + 5));
    }

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
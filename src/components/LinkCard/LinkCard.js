import React from "react";
import "./LinkCard.css";
import { withRouter } from "react-router-dom";
import * as api from "../../ulits/api";

function LinkCard(props) {

    function handleShortLinkClick(e) {
        api.redirect(e.target.textContent)
        .catch(err => err)   
    }

    return (
        <article className="linkcard">
            <p className="linkcard__text linkcard__short" onClick={handleShortLinkClick} >{props.shortlink}</p>
            <p className="linkcard__text">{props.link}</p>
            <p className="linkcard__text">{props.counter}</p>
        </article>
    );
}

export default withRouter(LinkCard);
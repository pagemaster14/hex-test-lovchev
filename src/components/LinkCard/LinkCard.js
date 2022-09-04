import React from "react";
import "./LinkCard.css";
import { withRouter } from "react-router-dom";

function LinkCard(props) {

    return (
        <article className="linkcard">
            <p className="linkcard__text">{props.shortlink}</p>
            <p className="linkcard__text">{props.link}</p>
            <p className="linkcard__text">{props.counter}</p>
        </article>
    );
}

export default withRouter(LinkCard);
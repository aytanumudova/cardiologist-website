import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const card = ({ cardImg, cardHeader, cardInfo, slug, className }) => {
  return (
    <div className={"card " + className}>
      <Link className="card-head" to={"/dis/" + slug}>
        <div className="overlay">
          <FontAwesomeIcon icon={faLink} className="link-icon" />
        </div>
        <img className="card-img-top" src={cardImg} alt="Card image cap" />
      </Link>
      <div className="card-body">
        <p className="card-text">
          <Link to={"/dis/" + slug}>{cardHeader}</Link>
        </p>
        <small className="text-secondary">{cardInfo}</small>
      </div>
    </div>
  );
};

export default card;

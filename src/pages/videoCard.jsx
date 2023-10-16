import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const videoCard = ({ cardImg, cardHeader, cardInfo, slug, className }) => {
  const imagePath = require(`../assets${cardImg}`);
  return (
    <div className={"card " + className}>
      <Link className="card-head" to={"/vid/" + slug}>
        <div className="overlay">
          <FontAwesomeIcon icon={faLink} className="link-icon" />
        </div>
        <img className="card-img-top" src={imagePath}></img>
      </Link>
      <div className="card-body">
        <p className="card-text">
          <Link to={"/vid/" + slug}>{cardHeader}</Link>
        </p>
        <small className="text-secondary">{cardInfo}</small>
      </div>
    </div>
  );
};

export default videoCard;

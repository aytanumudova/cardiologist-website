import React from "react";
import { Link } from "react-router-dom";
const card = ({ cardImg, cardHeader, cardInfo, slug }) => {
  return (
    <div class="card mb-5 col-12 col-md-8">
      <Link className="card-head" to={"/aboutDisease/" + slug}>
        <img class="card-img-top" src={require(cardImg)} alt="Card image cap" />
      </Link>
      <div class="card-body">
        <p class="card-text">
          <Link to={"/aboutDisease/" + slug}>{cardHeader}</Link>
        </p>
        <small className="text-secondary">{cardInfo}</small>
      </div>
    </div>
  );
};

export default card;

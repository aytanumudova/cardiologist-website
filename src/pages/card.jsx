import React from "react";
import { Link } from "react-router-dom";
const card = ({ cardImg, cardHeader, cardInfo, slug, className }) => {
  return (
    <div className={'card '+className}
    >
      <Link className="card-head" to={"/dis/" + slug}>
        <img class="card-img-top" src={cardImg} alt="Card image cap" />
      </Link>
      <div class="card-body">
        <p class="card-text">
          <Link to={"/dis/" + slug}>{cardHeader}</Link>
        </p>
        <small className="text-secondary">{cardInfo}</small>
      </div>
    </div>
  );
};

export default card;

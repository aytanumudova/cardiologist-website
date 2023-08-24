import React from "react";
import { Link } from "react-router-dom";
const videoCard = ({ cardImg, cardHeader, cardInfo, slug, className }) => {
  return (
    <div className={"card " + className}>
      <Link className="card-head" to={"/vid/" + slug}>
        <video class="video-card-top" src={cardImg}></video>
      </Link>
      <div class="card-body">
        <p class="card-text">
          <Link to={"/vid/" + slug}>{cardHeader}</Link>
        </p>
        <small className="text-secondary">{cardInfo}</small>
      </div>
    </div>
  );
};

export default videoCard;

import React from "react";
import aboutMe from "../pages/aboutMe";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const introsection = () => {
  return (
    <div>
      <div className="introsection d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-white">Khayal Mirzayev kimdir?</h1>
        <Link
          to={"./aboutMe"}
          className="myBtn text-decoration-none text-white border border-white rounded-5 px-4 py-2 mt-3 mb-5"
        >
          Daha fazla
          <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
        </Link>
        <a
          href="#whatClientsSay"
          className="myBtn text-decoration-none text-white border border-white rounded-5 px-4 py-2 mt-5"
        >
          Hastalarımızın yorumları
        </a>
      </div>
    </div>
  );
};

export default introsection;

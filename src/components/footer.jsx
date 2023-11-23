import React from "react";
import logo from "../assets/imgs/navbar/cardiology.png";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const footer = () => {
  return (
    <div className="footer pt-5">
      <div className="container row m-auto">
        <div className="col-12 col-lg-4 mb-4 mg-lg-0">
          <Link to={"/"} className="text-decoration-none logo-footer">
            <img src={logo} alt="navbar-brand" />
            Uzm.dr. Khayal Mirzayev
          </Link>
          <p className="mt-3">
            Prof. Dr. Khayal Mirzeyev'e Sorularınızı
            <span className="bold-text"> bilgi@khayalmirza.com</span>'dan
            e-posta yoluyla bildirebilirsiniz.
          </p>
          <p>
            Randevu taleplerinizi
            <span className="bold-text"> 0312 418 14 34</span> numarasından
            telefon yoluyla bildirebilirsiniz.
          </p>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column mb-5 mb-lg-0 ps-lg-5">
          <h5>Kurumsal</h5>
          <Link to={"/aboutMe"}>Hakkımda</Link>
          <Link to={"/atMediaPage"}>Basında</Link>
          <Link to={"/contact"}>İletişim</Link>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column">
          <h5> İletişim Bilgileri</h5>
          <div className="d-flex align-items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <span>
              Kızılırmak Mah., Ufuk Üni. Cad., 1445.Sokak, Paragon Tower, 6.Kat
              No:31, Çukurambar/ Ankara
            </span>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faMap} className="icon" />
            <a href="#">Yol Tarifi Al</a>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <a href="tel:01234">0312 418 14 34</a>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a href="mailto:bilgi@khayalmirza.com">bilgi@khayalmirza.com</a>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <span>Hafta içi / 10:30 - 18:30</span>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-2">
        &copy; Copyright 2023 – Drkhayalmirza.com | Her hakkı saklıdır.
      </div>
    </div>
  );
};

export default footer;

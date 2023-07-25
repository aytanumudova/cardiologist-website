import React from "react";
import logo from "../assets/imgs/navbar/cardiology.png";
import ReactDOM from "react-dom";
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
          <a href="#" className="text-decoration-none">
            <img src={logo} alt="navbar-brand" className="logo-footer" />
            Uzm.dr. Khayal Mirzayev
          </a>
          <p className="mt-3">
            Prof. Dr. Khayal Mirzayev'e Sorularınızı
            <span className="bold-text">bilgi@khayalmirza.com</span>'dan e-posta
            yoluyla bildirebilirsiniz.
          </p>
          <p>
            Randevu taleplerinizi 0312 418 14 34 numarasından telefon yoluyla
            bildirebilirsiniz.
          </p>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column mb-5 mb-lg-0 ps-lg-5">
          <h5>Kurumsal</h5>
          <a href="#">Hakkımda</a>
          <a href="#">Basında</a>
          <a href="#">İletişim</a>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column">
          <h5> İletişim Bilgileri</h5>
          <div className="info-row">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <span>
              Kızılırmak Mah., Ufuk Üni. Cad., 1445.Sokak, Paragon Tower, 6.Kat
              No:31, Çukurambar/ Ankara
            </span>
          </div>
          <div className="info-row">
            <FontAwesomeIcon icon={faMap} className="icon" />
            <a href="#">Yol Tarifi Al</a>
          </div>
          <div className="info-row">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <a href="tel:01234">0312 418 14 34</a>
          </div>
          <div className="info-row">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a href="mailto:bilgi@khayalmirza.com">bilgi@khayalmirza.com</a>
          </div>
          <div className="info-row">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <span>Hafta içi / 10:30 - 18:30</span>
          </div>
        </div>
      </div>
      <div className="container copyrighter-row">
        &copy; Copyright 2023 – KhayalMirza.com | Her hakkı saklıdır.
      </div>
    </div>
  );
};

export default footer;

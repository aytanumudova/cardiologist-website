import React from "react";
import doctorImg from "../../assets/imgs/aboutMe/cardiologist.jpeg";
import navbarBrand from "../../assets/imgs/navbar/cardiology.png";
import flagImg from "../../assets/imgs/navbar/icon-turkey.png";

import logo from "../../assets/imgs/navbar/cardiology.png";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const aboutMe = () => {
  return (
    <div className="aboutme-section">
      <nav class="navbar navbar-expand-lg p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="">
            <img src={navbarBrand} alt="navbar-brand" />
            Uzm.dr. Khayal Mirzayev
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto d-flex align-items-end flex-wrap mb-2 mb-lg-0">
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  Ana sayfa
                </a>
              </li>
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  Hakkımda
                </a>
              </li>

              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" href="#">
                  Şikayet ve tanı
                </a>
              </li>
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  İşlemler
                </a>
              </li>
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  Basında
                </a>
              </li>
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  İletişim
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link language me-2 me-lg-0"
                  aria-current="page"
                  href="#"
                >
                  <img src={flagImg} alt="lang-tr" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main-section py-5 my-5 text-center container">
        <h1 className="mb-4">Kardiyolog Dr. Khayal Mirzayev</h1>
        <small>GENEL VE AKADEMİK BİLGİLER</small>
        <div className="my-3 font-weight-bold my-4">
          <a href="#" className="text-decoration-none text-dark">
            Ana Sayfa
          </a>
          <span className="mx-3">{">>"}</span>
          <a className="color-blue text-decoration-none">Hakkımda</a>
        </div>
        <div className="doctorImg-container col-12 col-md-9  px-4 px-md-0">
          <img src={doctorImg} alt="doctor-image" />
        </div>
      </div>

      <div className="footer pt-5">
        <div className="container row m-auto">
          <div className="col-12 col-lg-4 mb-4 mg-lg-0">
            <a href="#" className="text-decoration-none">
              <img src={logo} alt="navbar-brand" className="logo-footer" />
              Uzm.dr. Khayal Mirzayev
            </a>
            <p className="mt-3">
              Prof. Dr. Khayal Mirzayev'e Sorularınızı
              <span className="bold-text">bilgi@khayalmirza.com</span>'dan
              e-posta yoluyla bildirebilirsiniz.
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
                Kızılırmak Mah., Ufuk Üni. Cad., 1445.Sokak, Paragon Tower,
                6.Kat No:31, Çukurambar/ Ankara
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
    </div>
  );
};

export default aboutMe;
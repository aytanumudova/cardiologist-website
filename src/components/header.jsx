import React from "react";
import navbarBrand from "../assets/imgs/navbar/cardiology.png";
import flagImg from "../assets/imgs/navbar/icon-turkey.png";

const header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
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
      <div className="introsection d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-white">Khayal Mirzayev kimdir?</h1>
        <a
          href="#"
          className="text-decoration-none text-white border border-white rounded-5 px-4 py-2 mt-3 mb-5"
        >
          DAHA FAZLA
        </a>
        <a
          href="#"
          className="text-decoration-none text-white border border-white rounded-5 px-4 py-2 mt-5"
        >
          Hastalarımızın yorumları
        </a>
      </div>
    </div>
  );
};

export default header;

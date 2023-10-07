import React from "react";
import navbarBrand from "../assets/imgs/navbar/cardiology.png";
import flagImg from "../assets/imgs/navbar/icon-turkey.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            <img src={navbarBrand} alt="navbar-brand" />
            Uzm.dr. Khayal Mirzayev
          </Link>
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
                <Link class="nav-link text-white" aria-current="page" to={"/"}>
                  Ana sayfa
                </Link>
              </li>
              <li class="nav-item me-md-3 px-2">
                <Link
                  class="nav-link text-white"
                  aria-current="page"
                  to={"/aboutMe"}
                >
                  Hakkımda
                </Link>
              </li>

              <li class="nav-item me-md-3 px-2">
                <Link class="nav-link text-white" to={"/diseasesPage"}>
                  Şikayet ve tanı
                </Link>
              </li>
              <li class="nav-item me-md-3 px-2">
                <Link class="nav-link text-white" aria-current="page" to={"/servicesPage"}>
                  İşlemler
                </Link>
              </li>
              <li class="nav-item me-md-3 px-2">
                <Link class="nav-link text-white" aria-current="page" to={"/atMediaPage"}>
                  Basında
                </Link>
              </li>
              <li class="nav-item me-md-3 px-2">
                <Link class="nav-link text-white" aria-current="page" to={"/contact"}>
                  İletişim
                </Link>
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
      
    </div>
  );
};

export default header;

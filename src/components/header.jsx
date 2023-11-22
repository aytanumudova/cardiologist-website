import React from "react";
import navbarBrand from "../assets/imgs/navbar/cardiology.png";
import flagImg from "../assets/imgs/navbar/icon-turkey.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand ms-0 ms-md-3" to={"/"}>
            <img src={navbarBrand} alt="navbar-brand" />
            Uzm.dr. Khayal Mirzayev
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex align-items-end flex-wrap mb-2 mb-lg-0">
              <li className="nav-item me-md-3 px-2">
                <Link className="nav-link text-white" aria-current="page" to={"/"}>
                  Ana sayfa
                </Link>
              </li>
              <li className="nav-item me-md-3 px-2">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to={"/aboutMe"}
                >
                  Hakkımda
                </Link>
              </li>

              <li className="nav-item me-md-3 px-2">
                <Link className="nav-link text-white" to={"/diseasesPage"}>
                  Şikayet ve tanı
                </Link>
              </li>
              <li className="nav-item me-md-3 px-2">
                <Link className="nav-link text-white" aria-current="page" to={"/servicesPage"}>
                  İşlemler
                </Link>
              </li>
              <li className="nav-item me-md-3 px-2">
                <Link className="nav-link text-white" aria-current="page" to={"/atMediaPage"}>
                  Basında
                </Link>
              </li>
              <li className="nav-item me-md-3 px-2">
                <Link className="nav-link text-white" aria-current="page" to={"/contact"}>
                  İletişim
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link language me-2 me-lg-0"
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

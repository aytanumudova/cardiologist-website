import React from "react";
import navbarBrand from "../assets/imgs/navbar/cardiology.png";
import flagImg from "../assets/imgs/navbar/icon-turkey.png";
const navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={navbarBrand} alt="navbar-brand" />
            Uzm.dr. Hayal Mirzayev
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
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto d-flex align-items-end mb-2 mb-lg-0">
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  Ana Sayfa
                </a>
              </li>

              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" href="#">
                  Makaleler
                </a>
              </li>
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" href="#">
                  Hizmetlerimiz
                </a>
              </li>
              <li class="nav-item dropdown me-md-3 px-2">
                <a
                  class="nav-link dropdown-toggle  text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Medya
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                    <a class="dropdown-item" href="#">
                      Sizden gelenler
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Basında biz
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  Hakkında
                </a>
              </li>
              <li class="nav-item me-md-3 px-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  İletişim
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link language" aria-current="page" href="#">
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

export default navbar;

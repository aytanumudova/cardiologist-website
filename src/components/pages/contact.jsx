import React from "react";

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
const contact = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg p-3 myNavbar">
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
      <div className="contact-section">
        <div className="container">
          <h1 className="mb-4 text-center">İletişim</h1>
          <div className=" font-weight-bold mt-4 mb-5 text-center nav-text ">
            <p>Hizmetlerimiz hakkında detaylı bilgi almak için bize ulaşın.</p>
            <a href="#" className="text-decoration-none text-dark">
              Ana Sayfa
            </a>
            <span className="mx-3">{">>"}</span>
            <a className="color-blue text-decoration-none">İletişim</a>
          </div>
          <div className="google-map-code m-auto col-11 col-md-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6908546089194!2d32.81263547507992!3d39.9035532867148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f516d319681%3A0xe3fa091e9b309e00!2sMemorial%20Ankara%20Hastanesi!5e0!3m2!1str!2sus!4v1691259529143!5m2!1str!2sus"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              className="myIframe "
            ></iframe>
          </div>
          <h2 className="text-center mt-5">İletişim Bilgileri</h2>
          <div className="row d-flex gap-5 mt-5 px-4 px-md-0">
            <div className="col-12 col-lg-4 d-flex flex-column">
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
            <div className="col-12 col-lg-7 ">
              <form action="" className="myForm">
                <div className="mb-3">
                  <input type="text" placeholder="Adınız - Soyadınız" />
                </div>
                <div className="mb-3">
                  <input type="email" placeholder="E-posta Adresiniz" />
                </div>
                <div className="mb-3">
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                    placeholder="Mesajınız"
                  ></textarea>
                </div>
                <small className="text-secondary">
                  ANKARA RİTİM olarak kişisel verilerinizi iletişim,
                  bilgilendirme ve tanıtım amaçlarıyla yurt içinde ve yurt
                  dışında işliyoruz. Daha fazla bilgi için "İnternet Sitesi
                  Aydınlatma Metnimiz" ve "Gizlilik Politikamıza" göz
                  atabilirsiniz. Bu kapsamda,
                </small>
                <div className="mt-3">
                  <input type="checkbox" id="checkbox1" className="me-2" />
                  <small htmlFor="checkbox1" className="text-secondary">
                    Şahsıma veya yakınıma ait Özel nitelikli ve diğer kişisel
                    verilerimin yurt içinde işlenmesi ve paylaşılması için Açık
                    rızamı veriyorum.
                  </small>
                </div>
                <div className="mt-3">
                  <input type="checkbox" id="checkbox2" className="me-2" />
                  <small htmlFor="checkbox2" className="text-secondary">
                    Şahsıma veya yakınıma ait kişisel verilerimin ofis
                    uygulamaları, sosyal medya gibi yurt dışında yerleşik vb.
                    platform/uygulamalara aktarılabilmesi için Açık rızamı
                    veriyorum.
                  </small>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="py-1 px-3 rounded-5 border-0 bg-blue text-light"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
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
              <span className="bold-text"> bilgi@khayalmirza.com</span>'dan
              e-posta yoluyla bildirebilirsiniz.
            </p>
            <p>
              Randevu taleplerinizi{" "}
              <span className="bold-text">0312 418 14 34</span> numarasından
              telefon yoluyla bildirebilirsiniz.
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

export default contact;

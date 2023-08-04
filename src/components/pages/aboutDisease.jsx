import React from "react";
import navbarBrand from "../../assets/imgs/navbar/cardiology.png";
import flagImg from "../../assets/imgs/navbar/icon-turkey.png";

import img1 from "../../assets/imgs/services/image1.jpg";
import img2 from "../../assets/imgs/services/ritim-bozukluk.jpeg";
import img3 from "../../assets/imgs/services/kalp_yetersizligi.jpg";
import img4 from "../../assets/imgs/services/carpinti.jpg";

import logo from "../../assets/imgs/navbar/cardiology.png";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const aboutDisease = () => {
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
      <div className="aboutDisease-section">
        <div className="container">
          <h1 className="mb-4 text-center">Kalp Sağlığı Nasıl Korunur?</h1>
          <div className="my-3 my-4 text-center nav-text">
            <a href="#" className="text-decoration-none text-dark">
              Ana Sayfa
            </a>
            <span className="mx-3 color-blue">{">>"}</span>
            <a className="text-decoration-none text-dark" href="#">
              Şikayet ve Tanı
            </a>
            <span className="mx-3 color-blue">{">>"}</span>
            <a className="color-blue text-decoration-none">
              Kalp Sağlığı Nasıl Korunur?
            </a>
          </div>
          <p className="text-center">9 Kasım 2022</p>
          <div>
            <img
              src={img1}
              className="article-image d-block m-auto"
              alt="article-image"
            />
          </div>
          <div className="article-text py-5 mt-2">
            <p>
              Kalp, tüm vücudun sağlığını etkileyen ve sağlıklı çalışmaması
              durumunda ciddi sağlık riskleri doğurabilecek bir organdır.
              Küresel ölçekte 70 yaş altı, bulaşıcı olmayan hastalıklara bağlı
              ölümlerin %37’si kalp ve damar hastalıkları nedeniyle meydana
              gelmiştir. Ancak kalp sağlığımızı korumak ve kalp ve damar
              hastalıklarına yakalanma riskimizi önemli ölçüde düşürmek
              elimizdedir.
            </p>
            <p>
              <span className="text-bold"> 1. Sağlıklı Beslenin</span>
              <br />
              Kalp ve damar yolu hastalıklarına yakalanma riskini arttıran
              faktörlerin başında sağlıksız beslenme gelmektedir. Kalp dostu bir
              beslenme için doymuş yağ tüketimini olabildiğince azaltmak ve tuz
              tüketimini günde 5gr ile sınırlandırmak gerekir.
              <br />
              Sakatatlar, kabuklu deniz hayvanları işlenmiş et ürünleri ve yağlı
              gıdalar (krema, mayonez, margarin) mümkün olduğunca az tüketilmesi
              gereken ürünler arasındadır. Taze sebzeler, bakliyat, balık ve
              lifli gıdalar ağırlıklı bir beslenme tercih ederek kalp
              sağlığınızı koruyabilirsiniz.
            </p>
            <p>
              <span className="text-bold">
                2. Sağlıksız Alışkanlıklardan Uzaklaşın
              </span>
              <br />
              Kalp sağlığınızı korumak için sigaradan uzak durmalısınız. Damar
              iç yüzeyinde birikimi kolaylaştıran, damar elastikiyetini bozan ve
              pıhtılaşma eğilimini arttıran sigara, kalp ve damar hastalıklarına
              yakalanma riskini çok önemli ölçüde arttırıyor. Sigarayı
              bıraktıktan sonraki ilk bir yıl içerisinde hastalık riski %50
              azalırken riskin kaybolması 10 yılı buluyor.
            </p>
            <p>
              <span className="text-bold">3. İdeal Kilonuzu Koruyun</span>
              <br />
              Obezite, kalp ve damar hastalıklarına yakalanma riskini arttıran
              nedenlerin başında gelmektedir. Bel kalınlığının kadınlarda 80
              cm’nin, erkeklerde ise 94 cm’in üzerinde olması sağlık risklerini
              arttırmaktadır. Beden kitle indeksinizi 18.5 – 24.9 BMI aralığında
              tutarak sağlık sorunlarına yakalanma riskinizi azaltabilirsiniz.
            </p>
            <p>
              <span className="text-bold">4. Egzersiz Yapın</span>
              <br />
              Yetersiz fiziksel aktivite kalp ve damar hastalıkların riskini
              arttırırken, düzenli egzersiz bu riski %23 azaltmaktadır. Haftada
              en az 3 gün, 30’ar dakikalık aerobik egzersiz yapmak kalp
              sağlığınızı korumanıza önemli ölçüde yardımcı olmaktadır.
            </p>
            <p>
              <span className="text-bold">5. Kontrollerinizi Aksatmayın</span>
              <br />
              Kalp ve damar hastalıkları erken aşamalarındayken genellikle
              belirti vermezler. Ancak düzenli kontroller ile risk faktörlerinin
              erkenden teşhis edilmesi ve hastalık ilerlemeden gerekli
              önlemlerin alınması mümkündür. Özellikle 40 yaşından sonra kan
              şekeri, trigliserid, total kolesterol, HDL (iyi huylu kolesterol),
              LDL (kötü huylu kolesterol) ölçümlerinin düzenli olarak
              yapılmasında fayda vardır. Kan değerlerinin yanı sıra düzenli
              tansiyon ölçümleri de olası kalp damar hastalıklarının erkenden
              fark edilmesine yardımcı olacaktır.
            </p>
          </div>
          <hr />
          <div className=" px-3 px-lg-0">
            <h2 className="my-4 pt-5">Benzer Yazılar</h2>
            <div className="row cards-container">
              <div class="card border-0 col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <a className="card-head" href="#">
                  <img class="card-img-top" src={img2} alt="Card image cap" />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <a href="#">
                      Aritmi (Kalp Ritim Bozukluğu) Neden Olur, Belirtileri
                      Nelerdir?
                    </a>
                  </p>
                  <small className="text-secondary">12 HAZ, 2023</small>
                </div>
              </div>
              <div class="card border-0 col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <a className="card-head" href="#">
                  <img class="card-img-top" src={img3} alt="Card image cap" />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <a href="#">Kalp Yetersizliği</a>
                  </p>
                  <small className="text-secondary">12 HAZ, 2023</small>
                </div>
              </div>
              <div class="card border-0 col-12 col-md-6 col-lg-4">
                <a className="card-head" href="#">
                  <img class="card-img-top" src={img4} alt="Card image cap" />
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <a href="#">Kalp Çarpıntısı</a>
                  </p>
                  <small className="text-secondary">12 HAZ, 2023</small>
                </div>
              </div>
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

export default aboutDisease;

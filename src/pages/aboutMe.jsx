import React from "react";
import doctorImg from "../assets/imgs/aboutMe/cardiologist.jpeg";
import Header from "../components/header";
import Footer from "../components/footer";

import logo from "../assets/imgs/navbar/cardiology.png";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const aboutMe = () => {
  return (
    <div>
      <Header />
      <div className="aboutme-section">
        <div className="container">
          <h1 className="mb-4 text-center">Kardiyolog Dr. Khayal Mirzayev</h1>
          <small className="text-center d-block">
            GENEL VE AKADEMİK BİLGİLER
          </small>
          <div className="my-3 font-weight-bold my-4 text-center nav-text">
            <Link to={"/"} className="text-decoration-none text-dark">
              Ana Sayfa
            </Link>
            <span className="mx-3">{">>"}</span>
            <a className="color-blue text-decoration-none">Hakkımda</a>
          </div>
          <div className="doctorImg-container col-12 col-md-9  px-4 px-md-0">
            <img src={doctorImg} alt="doctor-image" />
          </div>
          <div className="mt-5 pt-3 info-rows-container row px-4">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  17 NİSAN 1966‘da YOZGAT’ın BOĞAZLAYAN ilçesinde doğdu.
                  İlköğrenimini sırasıyla; AYDIN-SULTANHİSAR, HAKKARİ-ŞEMDİNLİ,
                  KONYA-YUNAK ve SEYDİŞEHİR’de tamamladı.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>1984 YILINDA ASKERİ KULELİ LİSESİ’NDEN mezun oldu.</p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  1990 YILINDA GÜLHANE ASKERİ TIP FAKÜLTESİ’nden Hv.Tbp.Tğm.
                  rütbesiyle mezun oldu. Gata Komutanlığında bir yıl stajyer
                  teğmen olarak görev yaptı.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  1991-1993 yılları arasında Balıkesir 9. Ana jet Üs
                  Komutanlığında uçuş hekimi olarak çalıştı.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  1993-1997 GATA Kardiyoloji AD’ da uzmanlık öğrencisi olarak
                  çalıştı.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  1997 yılında TÜRKİYE YÜKSEK İHTİSAS HASTANESİ’nde
                  ELEKTROFİZYOLOJİ VE ARİTMİ alanında eğitim aldı. Takiben
                  HOLLANDA MAASTRİCHT VE BELÇİKA AALST şehirlerinde bulunan
                  akademik hastanelerde gözlemci olarak çalıştı.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  17 NİSAN 1966‘da YOZGAT’ın BOĞAZLAYAN ilçesinde doğdu.
                  İlköğrenimini sırasıyla; AYDIN-SULTANHİSAR, HAKKARİ-ŞEMDİNLİ,
                  KONYA-YUNAK ve SEYDİŞEHİR’de tamamladı.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>1984 YILINDA ASKERİ KULELİ LİSESİ’NDEN mezun oldu.</p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  1990 YILINDA GÜLHANE ASKERİ TIP FAKÜLTESİ’nden Hv.Tbp.Tğm.
                  rütbesiyle mezun oldu. Gata Komutanlığında bir yıl stajyer
                  teğmen olarak görev yaptı.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  1991-1993 yılları arasında Balıkesir 9. Ana jet Üs
                  Komutanlığında uçuş hekimi olarak çalıştı.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  1993-1997 GATA Kardiyoloji AD’ da uzmanlık öğrencisi olarak
                  çalıştı.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span>{">>"}</span>
                <p>
                  1997 yılında TÜRKİYE YÜKSEK İHTİSAS HASTANESİ’nde
                  ELEKTROFİZYOLOJİ VE ARİTMİ alanında eğitim aldı. Takiben
                  HOLLANDA MAASTRİCHT VE BELÇİKA AALST şehirlerinde bulunan
                  akademik hastanelerde gözlemci olarak çalıştı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutMe;

import React from "react";
import logo from "../assets/imgs/navbar/cardiology.png";
const footer = () => {
  return (
    <div className="footer row">
      <div className="col col-md-4">
        <p>
          <img src={logo} alt="navbar-brand" />
          Uzm.dr. Khayal Mirzayev
        </p>
        <p>
          Prof. Dr. Sedat Köse’ye Sorularınızı bilgi@sedatkose.com‘dan e-posta
          yoluyla bildirebilirsiniz.{" "}
        </p>
        <p>
          Randevu taleplerinizi 0312 418 14 34 numarasından telefon yoluyla
          bildirebilirsiniz.
        </p>
      </div>
      <div className="col col-md-4">
        <h5>Kurumsal</h5>
        <a href="#">Hakkımda</a>
        <a href="#">Basında</a>
        <a href="#">İletişim</a>
      </div>
      <div className="col col-md-4">
        <h5> İletişim Bilgileri</h5>
        <p>
          Kızılırmak Mah., Ufuk Üni. Cad., 1445.Sokak, Paragon Tower, 6.Kat
          No:31, Çukurambar/ Ankara
        </p>
        <a href="#">Yol Tarifi Al</a> 
        <a href="#">0312 418 14 34</a> 
        <a href="#">bilgi@sedatkose.com</a>  
        Hafta içi / 10:30 - 18:30
      </div>
    </div>
  );
};

export default footer;

import React from "react";
import img1 from "../assets/imgs/services/aritmi.jpg";
import img2 from "../assets/imgs/services/kalp-kapak.jpg";
import img3 from "../assets/imgs/services/koroner-arter.jpg";
import img4 from "../assets/imgs/services/endokardit.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const services = () => {
  return (
    <div className="services-section container">
      <h2 className="text-center">Şikayet ve tanı</h2>
      <OwlCarousel
        className="owl-theme "
        loop
        margin={10}
        nav
        autoplay={true}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        }}
      >
        <div class="item">
          <div class="card">
            <img class="card-img-top" src={img1} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <a href="#">Kalp ritmi sorunları (aritmiler)</a>
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card">
            <img class="card-img-top" src={img2} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <a href="#">Kalp kapak hastalığı</a>
              </p>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="card">
            <img class="card-img-top" src={img3} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <a href="#">Koroner arter hastalığı</a>
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card">
            <img class="card-img-top" src={img4} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <a href="#">Kalp enfeksiyonu</a>
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default services;

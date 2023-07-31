import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../assets/imgs/services/aritmi.jpg";
import img2 from "../assets/imgs/services/kalp-kapak.jpg";
import img3 from "../assets/imgs/services/koroner-arter.jpg";
import img4 from "../assets/imgs/services/endokardit.png";

const services = () => {
  return (
    <div className="services-section container my-5 py-5">
      <h2 className="text-center mb-4">Şikayet ve tanı</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="card">
            <img class="card-img-top" src={img1} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <a href="#">Kalp ritmi sorunları (aritmiler)</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <img class="card-img-top" src={img2} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <a href="#">Kalp kapak hastalığı</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <img class="card-img-top" src={img3} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <a href="#">Koroner arter hastalığı</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <img class="card-img-top" src={img4} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                <a href="#">Kalp enfeksiyonu</a>
              </p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default services;

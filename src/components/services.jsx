import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../assets/imgs/services/image1.jpg";
import img2 from "../assets/imgs/services/ritim-bozukluk.jpeg";
import img3 from "../assets/imgs/services/kalp_yetersizligi.jpg";
import img4 from "../assets/imgs/services/carpinti.jpg";

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
            <a className="card-head" href="#">
              <img class="card-img-top" src={img1} alt="Card image cap" />
            </a>
            <div class="card-body">
              <p class="card-text">
                <a href="#">Kalp Sağlığı Nasıl Korunur?</a>
              </p>
              <small className="text-secondary">12 HAZ, 2023</small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
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
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
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
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default services;

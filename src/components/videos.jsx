import React, { useRef, useState } from "react";
import img1 from "../assets/imgs/services/kalp-kapak.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const videos = () => {
  return (
    <div className="container videos-section py-5 my-5">
      <h2 className="text-center mb-4">Videolar</h2>
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
            <a href="#">
              <img class="card-img-top" src={img1} alt="Card image cap" />
            </a>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <a href="#">
              <img class="card-img-top" src={img1} alt="Card image cap" />
            </a>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <a href="#">
              <img class="card-img-top" src={img1} alt="Card image cap" />
            </a>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <a href="#">
              <img class="card-img-top" src={img1} alt="Card image cap" />
            </a>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <a href="#">
              <img class="card-img-top" src={img1} alt="Card image cap" />
            </a>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default videos;

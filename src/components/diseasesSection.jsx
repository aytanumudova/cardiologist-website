import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Card from "../pages/card";
import datas from "../data.json";
import { Cloudinary } from "@cloudinary/url-gen";
const services = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dkongpllw" } });
  const diseases = datas.filter((d) => d.type === "d");
  return (
    <div className="diseases-section container my-5 py-5">
      <h2 className="text-center color-blue">Şikayet ve Tanı</h2>
      <div className="line mb-5"></div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
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
        {diseases.map((d) => (
          <SwiperSlide>
            <Card
              cardImg={d.img}
              cardHeader={d.header}
              cardInfo={d.info}
              slug={d.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default services;

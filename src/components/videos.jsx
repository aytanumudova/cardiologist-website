import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import Card from "../pages/videoCard";
import videoDatas from "../videos.json";

const videos = () => {
  const videos = videoDatas.filter((v) => v.type === "v");

  return (
    <div className="container videos-section py-5 my-5">
      <h2 className="text-center color-blue">Videolar</h2>
      <div className="line m-auto mt-3 mb-5"></div>

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
        className="pb-5"
      >
        {videos.map((v) => (
          <SwiperSlide>
            <Card
              cardImg={v.img}
              cardHeader={v.header}
              cardInfo={v.info}
              slug={v.slug}
              key={v.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default videos;

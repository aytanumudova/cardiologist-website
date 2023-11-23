import React from "react";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatClientsSay = () => {
  useEffect(() => {
    AOS.init({
      debounceDelay: 200,
      once: false,
      mirror: true,
    });
  }, []);
  
  return (
    <div className="whatClientsSay text-center py-5 px-2" id="whatClientsSay">
      <div className="container">
        <h2 className="text-center color-blue">Hasta Görüşleri</h2>
        <div className="line mb-5"></div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper "
        >
          <SwiperSlide className="col-12 p-5">
            <div data-aos="fade-left">
              <p>
                Lorem ipsum dolor sit fsyr, ds consectetur adipisicing elit.
                Earum aut aspernatur quasi qui quod, libero corporis aliquam
                beatae consectetur ullam optio voluptate reprehenderit rerum
                eaque deleniti. Sed dolorem suscipit porro neque sit est hic
                iusto officiis at facilis, explicabo eos odit alias nulla
                distinctio molestiae architecto dolor voluptate qui animi.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="text-bold">İ.. N..</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="col-12 p-5">
            <div data-aos="fade-left">
              <p>
                Lorem ipsum dolor sit fsyr, ds consectetur adipisicing elit.
                Earum aut aspernatur quasi qui quod, libero corporis aliquam
                beatae consectetur ullam optio voluptate reprehenderit rerum
                eaque deleniti. Sed dolorem suscipit porro neque sit est hic
                iusto officiis at facilis, explicabo eos odit alias nulla
                distinctio molestiae architecto dolor voluptate qui animi.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="text-bold">İ.. N..</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhatClientsSay;

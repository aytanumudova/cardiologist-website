import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
const WhatClientsSay = () => {
  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    debounceDelay: 200, // the delay on debounce used while resizing window (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
  });
  AOS.init();
  return (
    <div className="whatClientsSay text-center" id="whatClientsSay">
      <div className="container">
        <h2 className="text-center color-blue">Hasta Görüşleri</h2>
        <div className="line mb-5"></div>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
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
          <SwiperSlide>
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

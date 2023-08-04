import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const WhatClientsSay = () => {
  return (
    <div className="whatClientsSay text-center">
      <div className="container">
        <h2 className="mb-5">Hasta Görüşleri</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div>
              <p>
                Lorem ipsum dolor sit fsyr, ds consectetur adipisicing elit.
                Earum aut aspernatur quasi qui quod, libero corporis aliquam
                beatae consectetur ullam optio voluptate reprehenderit rerum
                eaque deleniti. Sed dolorem suscipit porro neque sit est hic
                iusto officiis at facilis, explicabo eos odit alias nulla
                distinctio molestiae architecto dolor voluptate qui animi.
              </p>
              <p className="text-bold">İ.. N..</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p>
                Lorem ipsum dolor sit fsyr, ds consectetur adipisicing elit.
                Earum aut aspernatur quasi qui quod, libero corporis aliquam
                beatae consectetur ullam optio voluptate reprehenderit rerum
                eaque deleniti. Sed dolorem suscipit porro neque sit est hic
                iusto officiis at facilis, explicabo eos odit alias nulla
                distinctio molestiae architecto dolor voluptate qui animi.
              </p>
              <p className="text-bold">İ.. N..</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhatClientsSay;

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "./videoCard";

import videos from "../videos.json";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const oneVideoPage = () => {
  return (
    <div>
      <Header />
      <div className="oneVideo-page">
        <div className="container">
          <h1 className="mb-4 text-center">
            Ritim bozukluğu nasıl tedavi edilir?
          </h1>
          <div className="my-3 text-center nav-text">
            <Link to={"/"} className="text-decoration-none text-dark">
              Ana Sayfa
            </Link>
            <span className="mx-3">{">>"}</span>
            <Link
              to={"/diseasesPage"}
              className="text-decoration-none text-dark"
            >
              Videolar
            </Link>
            <span className="mx-3 ">{">>"}</span>
            <a className="color-blue text-decoration-none">
              Ritim bozukluğu nasıl tedavi edilir?
            </a>
          </div>
          <p className="text-center">9 Kasım 2022</p>
          <div>
            <iframe
              className="article-image d-block m-auto"
              src="https://www.youtube.com/embed/flJsXOMhuK0?si=SSG5P0MXbg79SEeD&amp;start=3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <hr />
          <div className="px-3 px-lg-0">
            <h2 className="my-4 pt-5">Benzer Yazılar</h2>
            <div className="container videos-section pt-5 mt-5">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default oneVideoPage;

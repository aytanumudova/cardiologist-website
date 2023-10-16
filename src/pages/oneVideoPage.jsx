import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "./videoCard";

import videos from "../videos.json";
import { Link } from "react-router-dom";

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
            <div className="row cards-container">
              {videos.map((v) => (
                <Card
                  cardImg={v.img}
                  cardHeader={v.header}
                  cardInfo={v.info}
                  slug={v.slug}
                  className={"col-12 col-md-6 col-lg-4"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default oneVideoPage;

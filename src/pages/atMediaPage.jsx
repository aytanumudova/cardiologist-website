import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import Card from "./card";
import { Link } from "react-router-dom";
import datas from "../data.json";
import { Cloudinary } from "@cloudinary/url-gen";

const atMediaPage = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dkongpllw" } });
  const article = datas.filter((a) => a.type === "a");
  return (
    <div>
      <Header />
      <div className="atMedia-page">
        <div className="container">
          <h1 className="mb-4 text-center">Şikayet ve Tanı</h1>
          <div className="my-3 font-weight-bold my-4 text-center nav-text">
            <Link to={"/"} className="text-decoration-none text-dark">
              Ana Sayfa
            </Link>
            <span className="mx-3">{">>"}</span>
            <a className="color-blue text-decoration-none">Şikayet ve Tanı</a>
          </div>
          <div className="px-3 px-md-0 d-flex flex-column justify-content-center align-items-center">
            {article.map((a) => (
              <Card
                cardImg={a.img}
                cardHeader={a.header}
                cardInfo={a.info}
                slug={a.slug}
                className="mb-5 col-12 col-md-8"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default atMediaPage;

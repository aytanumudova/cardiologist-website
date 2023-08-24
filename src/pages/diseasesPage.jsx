import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "./card";

import datas from "../data.json";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";

const diseasesSection = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dkongpllw" } });
  const diseases = datas.filter((d) => d.type === "d");
  return (
    <div>
      <Header />
      <div className="diseases-page">
        <div className="container">
          <h1 className="mb-4 text-center">Şikayet ve Tanı</h1>
          <div className="my-3 font-weight-bold my-4 text-center nav-text">
            <Link to={"/"} className="text-decoration-none text-dark">
              Ana Sayfa
            </Link>
            <span className="mx-3">{">>"}</span>
            <a className="text-decoration-none">Şikayet ve Tanı</a>
          </div>
          <div className="px-3 px-md-0 d-flex flex-column justify-content-center align-items-center">
            {diseases.map((d) => (
              <Card
                cardImg={d.img}
                cardHeader={d.header}
                cardInfo={d.info}
                slug={d.slug}
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

export default diseasesSection;

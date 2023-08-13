import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";

import Header from "../components/header";
import Footer from "../components/footer";
import Card from "./card";

import servicesData from "../service.json"
const servicesPage = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dkongpllw" } });

  return (
    <div>
      <Header />
      <div className="services-page">
        <div className="container">
          <h1 className="mb-4 text-center">İşlemler</h1>
          <div className="my-3 font-weight-bold my-4 text-center nav-text">
            <a href="#" className="text-decoration-none text-dark">
              Ana Sayfa
            </a>
            <span className="mx-3">{">>"}</span>
            <a className="color-blue text-decoration-none">Şikayet ve Tanı</a>
          </div>
          <div className="px-3 px-md-0 d-flex flex-column justify-content-center align-items-center">
          {servicesData.map((service) => (
              <Card
                cardImg={service.img}
                cardHeader={service.header}
                cardInfo={service.info}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default servicesPage;

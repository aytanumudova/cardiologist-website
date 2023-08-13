import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "./card";
// import img1 from "../assets/imgs/services/image1.jpg";
// import img2 from "../assets/imgs/services/ritim-bozukluk.jpeg";
// import img3 from "../assets/imgs/services/kalp_yetersizligi.jpg";
// import img4 from "../assets/imgs/services/carpinti.jpg";
import datas from "../diseases.json";
import { Cloudinary } from "@cloudinary/url-gen";
const diseasesSection = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dkongpllw" } });
  return (
    <div>
      <Header />
      <div className="diseases-section">
        <div className="container">
          <h1 className="mb-4 text-center">Şikayet ve Tanı</h1>
          <div className="my-3 font-weight-bold my-4 text-center nav-text">
            <a href="#" className="text-decoration-none text-dark">
              Ana Sayfa
            </a>
            <span className="mx-3">{">>"}</span>
            <a className="color-blue text-decoration-none">Şikayet ve Tanı</a>
          </div>
          <div className="px-3 px-md-0 d-flex flex-column justify-content-center align-items-center">
            {datas.map((data) => (
              <Card
                cardImg={data.img}
                cardHeader={data.header}
                cardInfo={data.info}
                slug={data.slug}
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

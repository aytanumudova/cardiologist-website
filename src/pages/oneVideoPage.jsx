import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import img1 from "../assets/imgs/services/image1.jpg";
import img2 from "../assets/imgs/services/ritim-bozukluk.jpeg";
import img3 from "../assets/imgs/services/kalp_yetersizligi.jpg";
import img4 from "../assets/imgs/services/carpinti.jpg";

import { Link } from "react-router-dom";
// import Card from "./videoCard";
import datas from "../data.json";

const oneVideoPage = () => {
  const diseases = datas.filter((d) => d.type === "d");
  return (
    <div>
      <Header />
      <div className="aboutDisease-page">
        <div className="container">
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default oneVideoPage;

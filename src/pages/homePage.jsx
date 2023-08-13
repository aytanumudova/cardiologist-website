import React from "react";
import Header from "../components/header";
import Introsection from "../components/introsection";
import Services from "../components/services";
import WhatClientsSay from "../components/whatClientsSay";
import Videos from "../components/videos";
import Footer from "../components/footer";

const homePage = () => {
  return (
    <div>
      <Header />
      <Introsection />
      <Services />
      <WhatClientsSay />
      <Videos />
      <Footer />
    </div>
  );
};

export default homePage;

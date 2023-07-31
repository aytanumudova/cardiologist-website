import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Header from "./components/header";
import Videos from "./components/videos";
import Services from "./components/services";
import Footer from "./components/footer";
import WhatClientsSay from "./components/whatClientsSay";
function App() {
  return (
    <>
      <Header></Header>
      <Services></Services>
      <WhatClientsSay></WhatClientsSay>
      <Videos></Videos>
      <Footer></Footer>
    </>
  );
}

export default App;

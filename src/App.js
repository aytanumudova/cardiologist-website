import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/navbar";
import Introsection from "./components/introsection";
import WhatPatientsSay from "./components/whatPatientsSay";
import Services from "./components/services";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Introsection></Introsection>
      <WhatPatientsSay></WhatPatientsSay>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;

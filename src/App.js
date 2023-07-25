import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Header from "./components/header";
import WhatPatientsSay from "./components/whatPatientsSay";
import Services from "./components/services";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header></Header>
      <WhatPatientsSay></WhatPatientsSay>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar";
import Introsection from "./components/introsection";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Introsection></Introsection>
    </>
  );
}

export default App;

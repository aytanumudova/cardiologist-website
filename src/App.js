import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="mainParent">
      <Navbar></Navbar>
      <div className="container"></div>
    </div>
  );
}

export default App;

import "./assets/css/vendors/animate.css";
import "./assets/css/vendors/bootstrap.css";
import "./assets/css/style.css";

import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import "./style.css";

// import { register } from "swiper/element/bundle";
// register();

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

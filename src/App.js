import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS only
import "bootstrap/dist/css/bootstrap.min.css";
// If you need Bootstrap's JS (includes Popper)
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../src/styles/global.css'; // activating global css to project
import HomeOverRide from "./pages/HomeOverRide";
import Page404 from "./pages/404";
import ContactOverRide from "./pages/ContactOverRide";
import ServicesOverRide from "./pages/ServicesOverRide";
import AboutUsOverRide from "./pages/AboutUsOverRide";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomeOverRide/>} />
        <Route path="/home" element={<HomeOverRide/>}/>
        <Route path="/contact" element={<ContactOverRide/>}/>
        <Route path="/services" element ={<ServicesOverRide/>}/>
        <Route path="/about-us" element = {<AboutUsOverRide/>}/>
        {/* direct-all non existant routes for 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//app.js is reponsible for pages routing in react project
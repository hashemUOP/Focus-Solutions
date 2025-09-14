import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS only
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/styles/global.css'; // activating global css to project
// If you need Bootstrap's JS (includes Popper)
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./pages/Home";
import Page404 from "./pages/404";
import Try from "./pages/SlideAnime";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/try" element ={<Try/>}/>
        {/* direct-all non existant routes for 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//app.js is reponsible for pages routing in react project
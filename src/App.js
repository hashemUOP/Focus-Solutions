import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Page404 from "./pages/404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/home" element={<Home/>}/>
        
         {/* direct-all non existant routes for 404 */}
         {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//app.js is reponsible for pages routing in react project
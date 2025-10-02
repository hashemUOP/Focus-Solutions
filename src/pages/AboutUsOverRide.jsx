import React, { useState, useEffect } from "react";
import AboutUsDesktop from './Desktop/AboutUs';
import AboutUsPhone from './Phone/AboutUs';
import AboutUsTablet from './Tablet/AboutUs';

function AboutUsOverRide() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setDevice("phone");
      } else if (width > 600 && width <= 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    // Run once on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup removes listener after unmount
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (device === "phone"){
    return (
    <div>
      <h1>{device}</h1>
      <AboutUsPhone />  
    </div>
    
    );
  }
     
  if (device === "tablet"){
    return(
      <div>
        <h1>{device}</h1>
        <AboutUsTablet />
      </div>  
    );
  } 
  return (
    <div>
      <h1>{device}</h1>
      <AboutUsDesktop />
    </div>
  );
}

export default AboutUsOverRide;

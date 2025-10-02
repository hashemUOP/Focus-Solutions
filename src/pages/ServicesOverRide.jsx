import React, { useState, useEffect } from "react";
import ServicesDesktop from "./Desktop/Services";
import ServicesPhone from "./Phone/Services";
import ServicesTablet from "./Tablet/Services";

function ServicesOverRide() {
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
      <ServicesPhone />  
    </div>
    
    );
  }
     
  if (device === "tablet"){
    return(
      <div>
        <h1>{device}</h1>
        <ServicesTablet />
      </div>  
    );
  } 
  return (
    <div>
      <h1>{device}</h1>
      <ServicesDesktop />
    </div>
  );
}

export default ServicesOverRide;

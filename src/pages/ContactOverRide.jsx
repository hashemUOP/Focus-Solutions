import React, { useState, useEffect } from "react";
import ContactDesktop from "./Desktop/Contact";
import ContactPhone from "./Phone/Contact";
import ContactTablet from "./Tablet/Contact";

function ContactOverRide() {
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
      <ContactPhone />  
    </div>
    
    );
  }
     
  if (device === "tablet"){
    return(
      <div>
        <h1>{device}</h1>
        <ContactTablet />
      </div>  
    );
  } 
  return (
    <div>
      <h1>{device}</h1>
      <ContactDesktop />
    </div>
  );
}

export default ContactOverRide;

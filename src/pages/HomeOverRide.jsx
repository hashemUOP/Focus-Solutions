import React, { useState, useEffect } from "react";
import HomeDesktop from "./Desktop/Home";
import HomeTablet from "./Tablet/Home";
import HomePhone from "./Phone/Home";

function HomeOverRide() {
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
      <HomePhone />  
    </div>
    
    );
  }
     
  if (device === "tablet"){
    return(
      <div>
        <h1>{device}</h1>
        <HomeTablet />
      </div>  
    );
  } 
  return (
    <div>
      <h1>{device}</h1>
      <HomeDesktop />
    </div>
  );
}

export default HomeOverRide;

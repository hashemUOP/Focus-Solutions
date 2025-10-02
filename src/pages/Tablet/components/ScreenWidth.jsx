import { useState, useEffect } from "react";

function useDeviceInfo() {
  const [device, setDevice] = useState("desktop");
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function updateDevice() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreenSize({ width, height });

      if (width <= 600) {
        setDevice("phone");
      } else if (width >= 601 && width <= 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    }

    updateDevice(); // run on mount
    window.addEventListener("resize", updateDevice);

    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return { device, width: screenSize.width, height: screenSize.height };
}

// Example usage
export default function ScreenInfo() {
  const { device, width, height } = useDeviceInfo();

  return (
    <div>
      <h1>Device: {device}</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

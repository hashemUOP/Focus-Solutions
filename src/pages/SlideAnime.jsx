import React, { useEffect, useState } from "react";
import styles from "../styles/try.module.css";

export default function SlideAnime({ PanelAContent, PanelBContent }) {
  const [sliderValue, setSliderValue] = useState(0); // 0..100
  const [progress, setProgress] = useState(0); // 0..1

  //this code is important as it assures that the .container has the same height as the panel B
  useEffect(() => {
  const container = document.querySelector(`.${styles.container}`);
  const panelB = document.querySelector(`.${styles.panelB}`);

  if (container && panelB) {
    const updateHeight = () => {
      container.style.height = `${panelB.offsetHeight}px`;
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sc = window.scrollY;
          const prog = Math.max(0, Math.min(1, sc / window.innerHeight));
          setProgress(prog);
          setSliderValue(Math.round(prog * 100));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div className={styles.container}>
      {/* Panel A */}
      <div className={styles.panelA}>
        {PanelAContent}
      </div>

      {/* Panel B */}
      <div
        className={styles.panelB}
        style={{ transform: `translateY(-${progress * 100}vh)` }}
      >
        {PanelBContent}
      </div>

      {/* Slider UI
      <div className={styles.sliderWrap}>
        <label className={styles.sliderLabel}>Cover</label>
        <input
          className={styles.slider}
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={onSliderChange}
        />
      </div> */}
    </div>
  );
}

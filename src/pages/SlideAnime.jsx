import React, { useEffect, useState } from "react";
import styles from "../styles/try.module.css";

export default function SlideAnime({ PanelAContent, PanelBContent }) {
  const [sliderValue, setSliderValue] = useState(0); // 0..100
  const [progress, setProgress] = useState(0); // 0..1

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

  const onSliderChange = (e) => {
    const value = Number(e.target.value);
    setSliderValue(value);
    const prog = value / 100;
    setProgress(prog);
    window.scrollTo({ top: prog * window.innerHeight, behavior: "auto" });
  };

  return (
    <div className={styles.container}>
      {/* Panel A */}
      <section className={styles.panelA}>
        {PanelAContent}
      </section>

      {/* Panel B */}
      <section
        className={styles.panelB}
        style={{ transform: `translateY(-${progress * 100}vh)` }}
      >
        {PanelBContent}
      </section>

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

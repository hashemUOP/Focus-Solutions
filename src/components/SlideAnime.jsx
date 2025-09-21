// SlideAnime.jsx
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "../styles/home/try.module.css";

export default function SlideAnime({ PanelAContent, PanelBContent }) {
  const [sliderValue, setSliderValue] = useState(0); // 0..100
  const [progress, setProgress] = useState(0); // 0..1

  // refs for reliable DOM measurement
  const containerRef = useRef(null);
  const panelBRef = useRef(null);

  // updateHeight function (available to callers)
  const updateHeight = () => {
    if (!containerRef.current || !panelBRef.current) return;
    containerRef.current.style.height = `${panelBRef.current.offsetHeight}px`;
  };

  // measure synchronously after DOM updates but before paint
  useLayoutEffect(() => {
    // initial measure (defer one frame to be safe)
    requestAnimationFrame(updateHeight);

    // re-measure on window resize and on a custom event
    window.addEventListener("resize", updateHeight);
    // optional: listen for a custom event "panelB:resized" (see below quick-hack)
    window.addEventListener("panelB:resized", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("panelB:resized", updateHeight);
    };
    // no deps: measuring will be triggered by children via requestMeasure or events
  }, []);

  // scroll progress logic (unchanged)
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

  // callback passed to child so it can request parent to re-measure
  const requestMeasure = () => {
    // measure next frame to ensure DOM/layout is settled
    requestAnimationFrame(updateHeight);
  };

  // If PanelBContent is a React element, inject requestMeasure prop.
  const injectedPanelBContent = React.isValidElement(PanelBContent)
    ? React.cloneElement(PanelBContent, { requestMeasure })
    : PanelBContent;

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Panel A */}
      <section className={styles.panelA}>
        {PanelAContent}
      </section>

      {/* Panel B */}
      <section
        ref={panelBRef}
        className={styles.panelB}
        style={{ transform: `translateY(-${progress * 100}vh)` }}
      >
        {injectedPanelBContent}
      </section>
    </div>
  );
}

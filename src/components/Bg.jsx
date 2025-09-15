// import React, { lazy, Suspense, memo } from "react";
import React,{memo} from "react";
import styles from "../styles/home.module.css";
import bgImg from "../assets/images/home/bg/pexels-skyriusmarketing-2129796.webp";

// const SplineLazy = lazy(() => import("@splinetool/react-spline"));

const AutoRefreshComponent = memo(() => {
  return (
    <div
      className={styles.background}
      style={{ height: "100dvh", width: "100dvw" }}
    >
      {/* <Suspense fallback={<div>Loading 3D...</div>}>
        <SplineLazy scene="https://prod.spline.design/TdByxbuudj3U-PvH/scene.splinecode" />
      </Suspense> */}
      <img src={bgImg} style={{ objectFit: "cover", height: "100vh", width: "100vw" }} />
    </div>
  );
});

export default AutoRefreshComponent;

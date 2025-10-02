// import React, { lazy, Suspense, memo } from "react";
import React,{memo} from "react";
import styles from "../styles/home/home.module.css";
import bgImg from "../../../assets/images/home/bg/pexels-skyriusmarketing-2129796.webp";
import bgVideo from '../../../assets/videos/3129977-uhd_3840_2160_30fps.mp4';

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
      {/* <img src={bgImg} style={{ objectFit: "cover", height: "100vh", width: "100vw" }} /> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // video covers entire div
          zIndex: -1           // behind all content
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

export default AutoRefreshComponent;

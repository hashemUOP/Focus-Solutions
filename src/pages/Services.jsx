import styles from '../styles/services.module.css';
import React from 'react';
import SlideAnime from '../components/SlideAnime';
import NavBar from '../components/NavBar';
import img from '../assets/images/about-us/Screenshot_2025-09-21_131923-removebg-preview.png';
import bgVideo from '../assets/videos/3129977-uhd_3840_2160_30fps.mp4';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import imgMob from '../assets/images/services/Group415.png';
import greyCurve from '../assets/images/services/7c6b71c8-02e4-48b7-b220-81986e307c1c.png';
import { MdAlternateEmail } from "react-icons/md";
import img1 from '../assets/images/services/constr8.png';

function Services() {
  return (
    <div className={styles.servicesWrapper}>
      <PanelA />
      <PanelB />
    </div>
  );
}

export default Services;

function PanelA() {
  return (
    <div className={styles.panelA}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.bgVideo}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of video */}
      <div className={styles.panelAContent}>
        <h1 className={styles.panelATitle}>
          About Intellectsoft
        </h1>
        <p className={styles.panelADescription}>
          We are a digital transformation consultancy and engineering company that delivers cutting edge solutions for global organisations and technology startups. Since 2007 we have been helping companies and established brands reimagine their business through digitalisation.
        </p>
      </div>

      <NavBar />
    </div>
  );
}

function PanelB(){
  return(
    <div className={styles.panelB}>
      <h1 className={styles.panelBTitle}>Our Construction Software Solutions</h1>
      <span className={styles.panelBSubtitle}>
        We develop full-scale software for construction companies to help you digitalize your green 
        building business processes,
        achieve operational efficiency, and drive innovation.
      </span>
      <div className={styles.panelBContent}>
        <div className={styles.panelBList}>
          {[
            "Enterprise Resource Planning (ERP)",
            "Project Management",
            "Inspection Management",
            "Customer Portal & Partner Portal",
            "Construction Integrations",
            "Analytics & Reporting",
            "Project Onboarding and Training"
          ].map((text, i) => (
            <div className={styles.panelBListItem} key={i}>
              <MdAlternateEmail size={28} />
              <span className={styles.panelBListText}>{text}</span>
            </div>
          ))}
        </div>
        <img
          src={imgMob}
          alt="Mobile app"
          className={styles.panelBImage}
        />
      </div>
      <div className={styles.panelBBlackBox}>
        <img src={img1} style={{width:564,height:344,objectFit:"contain"}}/>
        <div style={{}}>

        </div>
      </div>
      <Footer/>   
    </div>  
  );
}

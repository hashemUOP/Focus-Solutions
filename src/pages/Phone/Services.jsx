import styles from './styles/services.module.css';
import React, { useEffect, useRef } from 'react';
import SlideAnime from './components/SlideAnime';
import NavBar from './components/NavBar';
import bgVideo from '../../assets/videos/3129977-uhd_3840_2160_30fps.mp4';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import imgMob from '../../assets/images/services/Group415.png';
import greyCurve from '../../assets/images/services/7c6b71c8-02e4-48b7-b220-81986e307c1c.png';
import { MdAlternateEmail } from "react-icons/md";
import img1 from '../../assets/images/services/constr8.png';

function ServicesPhone() {
  return (
    <div className={styles.servicesWrapper}>
      <PanelA />
      <PanelB />
    </div>
  );
}

export default ServicesPhone;

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

function PanelB() {
  const slideRef = useRef(null);

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el); // stop after first trigger
        }
      },
      { threshold: 0.2 } // 20% of element visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
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
        <img src={img1} style={{width:564,height:344,objectFit:"contain"}}
          ref={slideRef} className={`${styles.slide_in}`}
        />
        <div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <MdAlternateEmail size={25}/>
            <h1 style={{fontSize:"24px",fontWeight:"600"}}>Construction ERP Software</h1>
          </div>
          <span style={{width:"556px",fontSize:"14px",fontWeight:"400"}}>
            Build a custom solution that integrates various necessary functions in your construction business processes, including HR, accounting, project management, and others. This solution will help you automate core processes, enable seamless collaboration, and enhance decision-making to boost your project efficiency and profitability.
          </span>
          <ul>
            <li>Uniform user experience across all software modules</li>
            <li>Standardized, converged infrastructure and data points</li>
            <li>Single access to all core functions like accounting and payroll, asset management and maintenance planning, project management with end-to-end analytics and reports</li>
            <li>Maximized asset utilization across multiple sites and buildings, predictive maintenance</li>
            <li>Fast compliance checks and status monitoring</li>
            <li>Drastically reduced paperwork and improved visibility across all functions and processes</li>
          </ul>
        </div>
      </div>
      <div className={styles.panelBBlackBox}>
        <img src={img1} style={{width:564,height:344,objectFit:"contain"}}
          ref={slideRef} className={`${styles.slide_in}`}
        />
        <div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <MdAlternateEmail size={25}/>
            <h1 style={{fontSize:"24px",fontWeight:"600"}}>Construction ERP Software</h1>
          </div>
          <span style={{width:"556px",fontSize:"14px",fontWeight:"400"}}>
            Build a custom solution that integrates various necessary functions in your construction business processes, including HR, accounting, project management, and others. This solution will help you automate core processes, enable seamless collaboration, and enhance decision-making to boost your project efficiency and profitability.
          </span>
          <ul>
            <li>Uniform user experience across all software modules</li>
            <li>Standardized, converged infrastructure and data points</li>
            <li>Single access to all core functions like accounting and payroll, asset management and maintenance planning, project management with end-to-end analytics and reports</li>
            <li>Maximized asset utilization across multiple sites and buildings, predictive maintenance</li>
            <li>Fast compliance checks and status monitoring</li>
            <li>Drastically reduced paperwork and improved visibility across all functions and processes</li>
          </ul>
        </div>
      </div>
      <Footer/>   
    </div>  
  );
}

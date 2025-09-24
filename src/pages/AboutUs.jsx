import React from 'react';
import SlideAnime from '../components/SlideAnime';
import NavBar from '../components/NavBar';
import img from '../assets/images/about-us/Screenshot_2025-09-21_131923-removebg-preview.png';
import bgVideo from '../assets/videos/3129977-uhd_3840_2160_30fps.mp4';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

function AboutUs() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',      // full width
        // height is not set, so it fits content naturally
    }}>
    <PanelA />
    <PanelB />
    </div>

  );
}

export default Services;

function PanelA() {
  return (
    <div style={{ 
      position: 'relative', 
      height: "100vh", 
      width: '100vw', 
      overflow: 'hidden' 
    }}>
      {/* Background Video */}
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

      {/* Content on top of video */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: '40vh',
        left: 50,
        color: "white",
        }}>
        <h1 style={{ padding: "0px 75px", fontSize: 50 }}>
            About Intellectsoft
        </h1>
        <p style={{ padding: "0px 70px", fontSize: 25, fontWeight: 500 }}>
            We are a digital transformation consultancy and engineering company that delivers cutting edge solutions for global organisations and technology startups. Since 2007 we have been helping companies and established brands reimagine their business through digitalisation.
        </p>
        </div>

      <NavBar />
    </div>
  );
}



function PanelB(){
    return(
      <div style={{height:"auto",width:'100vw',display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1 style={{marginTop:"50px"}}>Mission & Vision</h1>
        <p style={{width:800,fontSize:"18px",fontWeight:400,marginTop:"10px"}}>
            Our mission is to help enterprises accelerate adoption of new technologies,
            untangle complex issues that always emerge during digital evolution,
            and orchestrate ongoing innovation.
            Whether it is a consumer-oriented app or a transformative enterprise-class solution,
            the company leads the process from ideation and concept to delivery,
            and provides ongoing support through its IS360 framework.
        </p>
        <img src={img}/>  
        <div 
        style={{
            display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 813,
          width: '100%',
          background: 'linear-gradient(135deg, #0f7be6 0%, #1ea1ff 100%)',
          padding:"0px 50px"
        }}
        >
            <ContactSection/>    
        </div>   
        <Footer/>   
      </div>  
    );
}

import React, { useState, Suspense, memo,useEffect,useRef} from 'react';
import AutoRefreshComponent from '../components/Bg';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';
import SlideAnime from './SlideAnime';
import { IoSettingsSharp } from "react-icons/io5";
import NavBar from '../components/NavBar';
import {cards_info,cards_info2,columns} from '../data/HomeData';



export default function Home() {
  
  const targetRef = useRef(null);
  useEffect(() => {
    return () => {
      console.log("Thanks for visiting the Focus Solutions website. My warmest regards, Hashem Sughaier(website creator).");
    };
  }, []);
  return (
    <SlideAnime
      PanelAContent={<PanelAContent targetRef={targetRef} />}
      PanelBContent={<PanelBContent targetRef={targetRef} />}
    />
  );
}

const PanelAContent = memo(({ targetRef }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleScroll = () => {
    if (targetRef.current) {
      const yOffset = -750; // scroll 100px above
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      <AutoRefreshComponent/>
      {/* navbar here */}
      <NavBar/>
      <div className={styles.panelA_Content_container}>
        <h1>Build Bespoke Software Solution for Your Business Growth</h1>
        <p style={{ fontWeight: 300, fontSize: 18, paddingRight: 50 }}>
          From innovative startups
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",              
            marginTop: 50,
            width: "100%",           
            justifyContent: "flex-start",
            flexWrap: "wrap",         
          }}
        >
          {cards_info2.map((card, idx) => (
            <div
              key={idx}
              className={styles.panelA_card}
              style={{
                backgroundColor:hoveredIndex === idx ? "white" : "rgba(255,255,255,0.06)",
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={handleScroll}
            >
              <IoSettingsSharp style={{color: hoveredIndex === idx ? "rgb(0, 114, 245)" : "white",height:40,width:40}}/>
                <h5 className="card-title" style={{color: hoveredIndex === idx ? "black" : "white"}}>{card.title}</h5>
              </div>
          ))}
        </div>

        <div className= {styles.panelA_buttons_container}>
          <button className={styles.panelA_button_one}>
            Book a free consultation
          </button>
          <button className={styles.panelA_button_two}>
            View portfolio
          </button>
        </div>
      </div>
    </>
  );
});


const PanelBContent = memo(({ targetRef }) => {
  const [isMorePressed, setPress] = useState(false);
  
  return (
    <div>
      <div className={styles.div1}>
        <span className={styles.span1}>
          Why Choose Intellectsoft as Your Custom Software Development Partner?
        </span>
        <span className={styles.span2}>
          Leading software development company. With over 17 years of market experience. Present in 20 countries. Our development team drives excellence, ensuring we deliver exactly what your business needs. Trusted by Fortune 500 giants like Intel, Luxottica, Jaguar Land Rover, and Guinness, bold mid-sized companies, and ambitious startups..
        </span>

        {/* Inlined Cards */}
        <div className={styles.div1_cards}>
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{width: 50, height: 50, margin: 10}}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.button_div1}>See what Intellectsoft can do for you</button>
      </div>
      <div className={styles.div2} >
        {/* Inlined Clients */}
        <div style={{ marginTop: 100 }}> 
            <span>Our Clients</span>
            <hr className={styles.divider} />
        </div>
        <div className={styles.div2_first_col}>
          <div className={styles.div2_second_col}>
            {columns.map((col, i) => (
              <div key={i} className={styles.div2_cols}>
                {col
                  .slice(0, isMorePressed ? col.length : Math.ceil(col.length / 2))
                  .map((logo, j) => (
                    <img
                      key={j}
                      src={logo}
                      alt="logo"
                      loading="lazy"
                      className={styles.div2_col_img}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {!isMorePressed && (
          <button className={styles.div2_button} onClick={() => setPress(true)}>
            See More
          </button>
        )}
      </div>

      <div className={styles.div3} >
        <div style={{ marginTop: 100 }}> 
            <span ref={targetRef}>Intelligent Software Solutions</span>
            <hr className={styles.divider} />
        </div>
        <div className={styles.div1_cards} >
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ width: 50, height: 50, margin: 10 }}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.div1_cards}>
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ width: 50, height: 50, margin: 10 }}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.div1_cards}>
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ width: 50, height: 50, margin: 10 }}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.div5}>5</div>
      <div className={styles.div6}>6</div>
      <div className={styles.div7}>7</div>
      <div className={styles.div8}>8</div>
      <div className={styles.div9}>9</div>
      <div className={styles.div10}>
        10
      </div>
      <div className={styles.div4} style={{height:300,width:'100vw',backgroundColor:"orange"}}><Footer/></div>
    </div>
  );
});

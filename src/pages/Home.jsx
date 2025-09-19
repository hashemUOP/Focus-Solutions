import React, { useState, Suspense, memo, useEffect, useRef } from 'react';
import AutoRefreshComponent from '../components/Bg';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';
import SlideAnime from './SlideAnime';
import { IoSettingsSharp } from "react-icons/io5";
import NavBar from '../components/NavBar';
import { cards_info, cards_info2, columns, reviewsData } from '../data/HomeData';
import CardSwiper from '../components/CardSwiper';
import { LiaStarSolid } from "react-icons/lia";
import ClientsSuccess from '../components/ClientSuccess';

// import imageQuote1 from '../assets/images/home/swiper/q1.png'; 


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
      <AutoRefreshComponent />
      {/* navbar here */}
      <NavBar />
      <div className={[styles.panelA_Content_container,]}>
        <h1>Build Bespoke Software Solution for Your Business Growth</h1>
        <p style={{ fontWeight: 300, fontSize: 18, paddingRight: 50 }}>
          From innovative startups
        </p>
        <div className={styles.panelA_cards_container}>
          {cards_info2.map((card, idx) => (
            <div
              key={idx}
              className={styles.panelA_card}
              style={{
                backgroundColor: hoveredIndex === idx ? "white" : "rgba(255,255,255,0.06)",
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={handleScroll}
            >
              {/* show icon & title only when NOT hovered */}
              {hoveredIndex !== idx && (
                <>
                  <IoSettingsSharp
                    style={{
                      color: "white",
                      height: 40,
                      width: 40,
                      marginBottom: 10,
                    }}
                  />
                  <h5
                    className="card-title"
                    style={{ color: "white", marginBottom: 10 }}
                  >
                    {card.title}
                  </h5>
                </>
              )}
              {/* show content only when hovered */}
              {hoveredIndex === idx && (
                <div style={{ padding: "0 20px", color: "black", display: "flex", flexDirection: "column", gap: 4 }}>
                  {card.content.map((item, i) => (
                    <span key={i} style={{ fontSize: 15, fontWeight: 400 }}>
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.panelA_buttons_container}>
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


const PanelBContent = memo(({ targetRef, requestMeasure }) => {
  const [isMorePressed, setPress] = useState(false);

  // When isMorePressed toggles, ask parent to re-measure on the next frame
  useEffect(() => {
    if (typeof requestMeasure === "function") {
      requestAnimationFrame(() => requestMeasure());
    }
  }, [isMorePressed, requestMeasure]);

  // Called when "See More" is pressed
  const handleSeeMore = () => {
    setPress(true);
    if (typeof requestMeasure === "function") {
      requestAnimationFrame(() => requestMeasure());
    }
  };

  // Called when any image finishes loading to ensure measurement is accurate
  const handleImgLoad = () => {
    if (typeof requestMeasure === "function") {
      requestAnimationFrame(() => requestMeasure());
    }
  };

  return (
    <div>
      <div className={styles.div1}>
        <span className={styles.span1}>
          Why Choose Intellectsoft as Your Custom Software Development Partner?
        </span>
        <span className={styles.span2}>
          Leading software development company. With over 17 years of market
          experience. Present in 20 countries. Our development team drives
          excellence, ensuring we deliver exactly what your business needs.
          Trusted by Fortune 500 giants like Intel, Luxottica, Jaguar Land
          Rover, and Guinness, bold mid-sized companies, and ambitious
          startups..
        </span>

        {/* Inlined Cards */}
        <div className={styles.div1_cards}>
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ width: 50, height: 50, margin: 10 }}
                loading="lazy"
                onLoad={handleImgLoad}
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

        <button className={styles.button_div1}>
          See what Intellectsoft can do for you
        </button>
      </div>

      <div className={styles.div2}>
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
                      onLoad={handleImgLoad}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {!isMorePressed && (
          <button className={styles.div2_button} onClick={handleSeeMore}>
            See More
          </button>
        )}
      </div>

      <div className={styles.div3}>
        <div style={{ marginTop: 100 }}>
          <span ref={targetRef}>Intelligent Software Solutions</span>
          <hr className={styles.divider} />
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
                onLoad={handleImgLoad}
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
                onLoad={handleImgLoad}
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
                onLoad={handleImgLoad}
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
      {/* Reviews (FeedBack) */}
      <div style={{ display: "flex", flexDirection: "column", backgroundColor: 'rgb(250, 250, 250)', paddingTop: "100px", paddingBottom: "100px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ alignSelf: "center" }}>Reviews (FeedBack)</span>
          <hr className={styles.divider} style={{ margin: "1px 600px", marginBottom: "20px" }} />
        </div>

        {/* WRAPPER: holds the scroll viewport and the two overlay blurs */}
        <div className={styles.div5Wrapper}>
          {/* left overlay blur */}
          <div className={styles.clutchReviewsStartblur}></div>

          {/* scrollable row */}
          <div className={styles.div5}>
            {reviewsData.map((review, index) => (
              <div key={index} className={styles.div5_review_card}>
                <img src={review.imageLeft} loading="lazy" alt="quote left" />
                <img src={review.imageRight} loading="lazy" alt="quote right" />

                <div className={styles.div5_review_card_column}>
                  <div className={styles.div5_review_card_text_column}>
                    <span style={{ fontSize: 16, padding: "0px 80px", fontWeight: 400 }}>
                      {review.short}
                    </span>
                    <span style={{ fontSize: 16, padding: "0px 80px", fontWeight: 300 }}>
                      {review.long}
                    </span>
                  </div>
                  <div className={styles.div5_review_card_info_column}>
                    <span style={{ fontSize: 18, fontWeight: 600 }}>{review.rank}</span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "grey" }}>{review.writer}</span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "grey", display: "flex", gap: 10, alignItems: "center" }}>
                      <img width="20px" height="20px" src={review.flag_location} alt="flag" />
                      {review.location}
                    </span>
                    <div className={styles.review_rating}>
                      <span style={{ display: "flex", alignItems: "center" }}>5.0</span>
                      <span className={styles.review_stars}>
                        {[...Array(5)].map((_, i) => <LiaStarSolid key={i} />)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* right overlay blur */}
          <div className={styles.clutchReviewsEndblur}></div>
          <div style={{display:"flex",flexDirection:"row",width:"100%",height:"10px",justifySelf:"center",justifyContent:"center",gap:"10px",paddingTop:"50px"}}>
            <div style={{width:"67px",height:"3px",backgroundColor:"lightgray",borderRadius:"3px"}}/>
            <div style={{width:"67px",height:"3px",backgroundColor:"lightgray",borderRadius:"3px"}}/>
            <div style={{width:"67px",height:"3px",backgroundColor:"lightgray",borderRadius:"3px"}}/>
            <div style={{width:"67px",height:"3px",backgroundColor:"lightgray",borderRadius:"3px"}}/>
            <div style={{width:"67px",height:"3px",backgroundColor:"lightgray",borderRadius:"3px"}}/>
          </div>
        </div>
      </div>

      <div className={styles.div4}>
        <ClientsSuccess />
      </div>
      <div className={styles.div6}>about us / mission</div>
      <div className={styles.div7}>Success Stories
      </div>
      <div className={styles.div8}>
        8
      </div>
      <div className={styles.div9}>9</div>
      <div
        className={styles.div10}
        style={{ height: 300, width: "100vw" }}
      >
        <Footer />
      </div>
    </div>
  );
});
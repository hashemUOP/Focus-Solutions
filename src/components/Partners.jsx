import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import styles from "../styles/home/partners.module.css";

import { partnersData } from "../data/HomeData"; // adjust path if needed

function Partners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const navSwiperRef = useRef(null);

  return (
    <section className={styles.clientsSuccess}>
      <div className={styles.container}>
        <h2 style={{ alignSelf: "center" }}>Our Partners</h2>
        <hr
          style={{
            width: "220px",
            alignSelf: "center",
            margin: "0px",
            height: "2px",
            backgroundColor: "grey",
          }}
        />

        {/* Main Slider with autoplay */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={`${styles.swiperContainer} ${styles.mainSlider}`}
        >
          {partnersData.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideWrapper}>
                <figure
                  className={`${styles.clientsImage} ${styles.lazyBackground}`}
                  style={{
                    backgroundImage: `url(${partner.companies_bg})`,
                  }}
                >
                  <img
                    src={partner.companies_logo}
                    className={`${styles.entityImg} ${styles.lazy}`}
                    alt={partner.comapnies_name}
                  />
                </figure>
                <div className={styles.content}>
                  <p className={styles.title}>{partner.comapnies_name}</p>
                  <p className={`${styles.caption} ${styles.caption200}`}>
                    {partner.comapnies_desc}
                  </p>
                  <p className={`${styles.caption} ${styles.caption100}`}>
                    {partner.comapnies_desc.slice(0, 120)}...
                  </p>
                  <a
                    href={`/cases/${partner.comapnies_name.toLowerCase()}`}
                    className={styles.contentLinkMore}
                  >
                    view more <i className="isoi-angle-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Logo Nav Slider */}
        <Swiper
          modules={[Navigation, Thumbs]}
          slidesPerView={6}
          spaceBetween={3}
          watchSlidesProgress
          onSwiper={(swiper) => (navSwiperRef.current = swiper)}
          className={`${styles.swiperContainer} ${styles.navSlider}`}
        >
          {partnersData.map((partner, index) => (
            <SwiperSlide key={index}>
              <figure
                className={`${styles.logoNav} ${
                  activeIndex === index ? styles.activeLogo : styles.inactiveLogo
                }`}
                onClick={() => {
                  if (mainSwiperRef.current) {
                    mainSwiperRef.current.slideToLoop(index);
                  }
                }}
              >
                <img
                  src={partner.companies_logo}
                  className={`${styles.entityImg} ${styles.entityImgNav}`}
                  alt={partner.comapnies_name}
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <a href="/cases" className={styles.casesButtonMain}>
        Explore Our Success Stories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="11"
          viewBox="0 0 5 11"
          fill="none"
        >
          <path d="M0 10.5L5 5.5L0 0.5V10.5Z"></path>
        </svg>
      </a>
    </section>
  );
}

export default Partners;

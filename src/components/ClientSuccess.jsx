import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "../styles/clientsuccess.module.css";
import image from "../assets/images/home/logos/Arabco-removebg-preview.webp";
import imageBG from '../assets/images/home/bg/creepy-old-factory-with-dark-rusted-machinery-eerie-silence_636537-427296.jpg';

function ClientsSuccess() {
  return (
    <section className={styles.clientsSuccess}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.titleBlack}`}>
          Our Partners
        </h2>

        {/* Main Slider */}
        <Swiper
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          className={`${styles.swiperContainer} ${styles.mainSlider}`}
        >
          <SwiperSlide>
            <div className={styles.slideWrapper}>
              <figure
                className={`${styles.clientsImage} ${styles.lazyBackground}`}
                style={{
                    backgroundImage: `url(${imageBG})`
                    }}

              >
                <img
                  src="/assets/94166408/img/clients-logo/cirrus.svg"
                  className={`${styles.entityImg} ${styles.lazy}`}
                  alt="Cirruspath"
                />
              </figure>
              <div className={styles.content}>
                <p className={styles.title}>Cirruspath</p>
                <p className={`${styles.caption} ${styles.caption200}`}>
                  Cirruspath was behind the highest-rated app for integrating
                  Salesforce with a user’s email inbox. Cirrus Insight Mobile
                  helps you leverage your sales data to gain valuable insights
                  and uncover new...
                </p>
                <p className={`${styles.caption} ${styles.caption100}`}>
                  Cirruspath was behind the highest-rated app for integrating
                  Salesforce with a user’s email inbox. Cirrus Insight...
                </p>
                <a href="/cases/cirrus" className={styles.contentLinkMore}>
                  view more <i className="isoi-angle-right"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slideWrapper}>
              <figure
                className={`${styles.clientsImage} ${styles.lazyBackground}`}
                style={{
                  backgroundImage: `url(${imageBG})`
                }}
              >
                <img
                  src={image}
                  className={`${styles.entityImg} ${styles.lazy}`}
                  alt="Eurostar"
                />
              </figure>
              <div className={styles.content}>
                <p className={styles.title}>Eurostar</p>
                <p className={`${styles.caption} ${styles.caption200}`}>
                  By offering innovative automated solutions, we've helped this
                  high-speed railway leader significantly improve passenger
                  information processing, enhance onboard amenities, and ensure
                  timely...
                </p>
                <p className={`${styles.caption} ${styles.caption100}`}>
                  By offering innovative automated solutions, we've helped this
                  high-speed railway leader significantly improve...
                </p>
                <a href="/cases/eurostar" className={styles.contentLinkMore}>
                  view more <i className="isoi-angle-right"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Add other SwiperSlides here */}
        </Swiper>

        {/* Logo Nav Slider */}
        <Swiper
          modules={[Navigation, Thumbs]}
          slidesPerView={6}
          spaceBetween={10}
          watchSlidesProgress
          className={`${styles.swiperContainer} ${styles.navSlider}`}
        >
          <SwiperSlide>
            <figure className={styles.logoNav}>
              <img
                src={image}
                className={`${styles.entityImg} ${styles.entityImgNav}`}
                alt="Cirruspath"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className={styles.logoNav}>
              <img
                src={image}
                className={`${styles.entityImg} ${styles.entityImgNav}`}
                alt="Eurostar"
              />
            </figure>
          </SwiperSlide>
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

export default ClientsSuccess;

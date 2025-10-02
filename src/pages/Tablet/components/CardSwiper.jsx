import React,{useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { slidesData } from '../../../data/HomeData';
import styles from '../styles/swiper.module.css';

function CardSwiper() {
  const swiperWrappedRef = useRef(null);
  
  function adjustMargin(){
    const screenWidth = window.innerWidth;
    if(swiperWrappedRef.current){
        swiperWrappedRef.current.style.marginLeft = 
        screenWidth <= 520 ? "0px" :
        screenWidth <= 650 ? "-50px" :
        screenWidth <= 800 ? "-100px" :
        "-150px";
    }
  }

  useEffect(()=>{
    adjustMargin();
    window.addEventListener("resize",adjustMargin);
    return ()=> window.removeEventListener("resize",adjustMargin)
  },[]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Swiper 
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView={'auto'}
          speed={800}
          slideToClickedSlide
          pagination={{ clickable:true }}
          breakpoints={{
            320: {spaceBetween:40},
            650: {spaceBetween:30},
            1000: {spaceBetween:20}
          }}
          onSwiper={(swiper)=>{
            swiperWrappedRef.current = swiper.wrapperEl;
          }}
        >
          {slidesData.map((slide,index) =>(
            <SwiperSlide key={index}>
              <img src={slide.imgSrc} alt={slide.title}/>
              <div className={styles.title}>
                <h1>{slide.title}</h1>
              </div>
              <div className={styles.content}>
                <div className={styles.textBox}>
                  <p>{slide.description}</p>
                </div>
                <div className={styles.footer}>
                  <div className={styles.category}>
                    {slide.categories.map((category,idx)=>(
                      <span key={idx} style={{"--i": idx + 1}}>{category}</span>
                    ))}
                  </div>
                  <button>
                    <span className={styles.label}>More ...</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default CardSwiper;

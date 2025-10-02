import React, { useRef, useEffect, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import styles from "../styles/home/home.module.css"; 
import { reviewsData } from "../../../data/HomeData";

export default function Reviews() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto change active index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviewsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Center the active card when it changes
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.children;
    const activeCard = cards[activeIndex];

    if (activeCard) {
      const containerCenter = container.offsetWidth / 2;
      const cardCenter =
        activeCard.offsetLeft + activeCard.offsetWidth / 2;

      container.scrollTo({
        left: cardCenter - containerCenter,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(250, 250, 250)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ alignSelf: "center" }}>Reviews</span>
        <hr
          className={styles.divider}
          style={{ margin: "1px 700px", marginBottom: "20px" }}
        />
      </div>

      {/* WRAPPER */}
      <div className={styles.div5Wrapper}>
        {/* Row but locked from user scrolling */}
        <div
          className={styles.div5}
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "hidden",
            scrollBehavior: "smooth",
            pointerEvents: "none",
            padding:"50px 0px",
          }}
        >
          {reviewsData.map((review, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={styles.div5_review_card}
                style={{
                  flexShrink: 0,
                  transform: isActive ? "scale(1.1)" : "scale(0.9)",
                  opacity: isActive ? 1 : 0.4,
                  transition: "all 0.4s ease",
                  zIndex: isActive ? 10 : 1,
                  marginLeft: (index === 0 && isActive) ? '110px' : 0,
                  marginRight: (index === reviewsData.length - 1)? '100px':0,
                  boxShadow:'0 0 10px rgba(0, 0, 0, 0.3)',
                }}
              >
                <img src={review.imageLeft} loading="lazy" alt="quote left" />
                <img src={review.imageRight} loading="lazy" alt="quote right" />

                <div className={styles.div5_review_card_column}>
                  <div className={styles.div5_review_card_text_column}>
                    <span
                      style={{
                        fontSize: 16,
                        padding: "0px 80px",
                        fontWeight: 400,
                      }}
                    >
                      {review.short}
                    </span>
                    <span
                      style={{
                        fontSize: 16,
                        padding: "0px 80px",
                        fontWeight: 300,
                      }}
                    >
                      {review.long}
                    </span>
                  </div>
                  <div className={styles.div5_review_card_info_column}>
                    <span style={{ fontSize: 18, fontWeight: 600 }}>
                      {review.rank}
                    </span>
                    <span
                      style={{ fontSize: 14, fontWeight: 500, color: "grey" }}
                    >
                      {review.writer}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "grey",
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <img
                        width="20px"
                        height="20px"
                        src={review.flag_location}
                        alt="flag"
                      />
                      {review.location}
                    </span>
                    <div className={styles.review_rating}>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        5.0
                      </span>
                      <span className={styles.review_stars}>
                        {[...Array(5)].map((_, i) => (
                          <LiaStarSolid key={i} />
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* progress bar dots */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "10px",
            justifySelf: "center",
            justifyContent: "center",
            gap: "10px",
            paddingTop: "20px",
          }}
        >
          {reviewsData.map((_, i) => (
            <div
              key={i}
              style={{
                width: "67px",
                height: "3px",
                backgroundColor: i === activeIndex ? "rgb(0, 114, 245)" : "lightgray",
                borderRadius: "3px",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

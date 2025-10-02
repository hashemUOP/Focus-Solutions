import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/home/awards.module.css";

const items = [
  { id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMT6wy6U_fvWN1mtwXo6sqfoD4RB6sqyR5Zg&s" },
  { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMT6wy6U_fvWN1mtwXo6sqfoD4RB6sqyR5Zg&s" },
  { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMT6wy6U_fvWN1mtwXo6sqfoD4RB6sqyR5Zg&s" },
  { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMT6wy6U_fvWN1mtwXo6sqfoD4RB6sqyR5Zg&s" },
  { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMT6wy6U_fvWN1mtwXo6sqfoD4RB6sqyR5Zg&s" },
];

export default function Awards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // 5 seconds per index

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const activeItem = container.children[activeIndex];
      container.scrollTo({
        left: activeItem.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div className={styles.scrollerContainer} ref={containerRef}>
      {items.map((item, idx) => (
        <div
        key={item.id}
        className={`${styles.item} ${activeIndex === idx ? styles.active : ""}`}
        >
        <img src={item.img} alt={`item-${item.id}`} />
        </div>

      ))}
    </div>
  );
}

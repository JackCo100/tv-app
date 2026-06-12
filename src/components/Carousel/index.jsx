import { useEffect, useState } from "react";
import Card from "../Card";
import style from "./Carousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VISIBLE_CARDS = {
  mobile: 1,
  tablet: 2,
  laptop: 4,
  desktop: 6,
  largeDesktop: 7,
};

export const Carousel = ({ title, cards }) => {
  const [displayCards, setDisplayCards] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChevron, setShowChevron] = useState(false);
  const totalCards = cards.length;

  useEffect(() => {
    const updateDevice = () => {
      console.log("window.innerWidth", window.innerWidth);
      if (window.innerWidth < 500) {
        setDisplayCards(VISIBLE_CARDS.mobile);
        if (totalCards > VISIBLE_CARDS.mobile) {
          setShowChevron(true);
        }
      }
      if (window.innerWidth >= 500 && window.innerWidth < 768) {
        setDisplayCards(VISIBLE_CARDS.tablet);
        if (totalCards > VISIBLE_CARDS.tablet) {
          setShowChevron(true);
        }
      }
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setDisplayCards(4);
        if (totalCards > VISIBLE_CARDS.laptop) {
          setShowChevron(true);
        }
      }
      if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setDisplayCards(6);
        if (totalCards > VISIBLE_CARDS.desktop) {
          setShowChevron(true);
        }
      }
      if (window.innerWidth >= 1280) {
        setDisplayCards(VISIBLE_CARDS.largeDesktop);
        if (totalCards > VISIBLE_CARDS.largeDesktop) {
          setShowChevron(true);
        }
      }
    };
    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => {
      window.removeEventListener("resize", updateDevice);
    };
  }, [window.innerWidth, totalCards]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalCards - displayCards),
    );
  };

  return (
    <>
      <h2 className={style.carouselTitle}>{title}</h2>
      <div className={style.carouselContainer}>
        {showChevron && (
          <FaChevronLeft
            onClick={handlePrev}
            className={`${style.chevron} ${currentIndex === 0 ? style.disabled : ""}`}
          />
        )}
        {cards.slice(currentIndex, currentIndex + displayCards).map((card) => (
          <div key={card.id} className={style.carouselItem}>
            <Card {...card} />
          </div>
        ))}
        {showChevron && (
          <FaChevronRight
            onClick={handleNext}
            className={`${style.chevron} ${currentIndex === totalCards - displayCards ? style.disabled : ""}`}
          />
        )}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import Card from "../Card";
import style from "./Carousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DEVICE, useDevice } from "../../utils/useDevice";

const VISIBLE_CARDS = {
  mobile: 1,
  tablet: 2,
  laptop: 5,
  desktop: 7,
  largeDesktop: 8,
};

export const Carousel = ({ title, cards }) => {
  const [displayCards, setDisplayCards] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChevron, setShowChevron] = useState(false);
  const device = useDevice();
  const totalCards = cards.length;

  useEffect(() => {
    if (device === DEVICE.MOBILE) {
      setDisplayCards(VISIBLE_CARDS.mobile);
      if (totalCards > VISIBLE_CARDS.mobile) {
        setShowChevron(true);
      }
    }
    if (device === DEVICE.TABLET) {
      setDisplayCards(VISIBLE_CARDS.tablet);
      if (totalCards > VISIBLE_CARDS.tablet) {
        setShowChevron(true);
      }
    }
    if (device === DEVICE.LAPTOP) {
      setDisplayCards(VISIBLE_CARDS.laptop);
      if (totalCards > VISIBLE_CARDS.laptop) {
        setShowChevron(true);
      }
    }
    if (device === DEVICE.DESKTOP && window.innerWidth >= 1280) {
      setDisplayCards(VISIBLE_CARDS.largeDesktop);
      if (totalCards > VISIBLE_CARDS.largeDesktop) {
        setShowChevron(true);
      }
    }
  }, [totalCards, device]);

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

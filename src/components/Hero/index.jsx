import { heroContent } from "../../content/hero";
import style from "./Hero.module.css";
export const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <h1>{heroContent.title}</h1>
      <p>{heroContent.description}</p>
      <button className={style.ctaButton}>{heroContent.ctaText}</button>
      <img
        src={heroContent.thumbnail}
        alt="Hero Thumbnail"
        className={style.heroThumbnail}
      />
    </div>
  );
};

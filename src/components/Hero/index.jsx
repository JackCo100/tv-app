import { Container, Grid, Item } from "../Grid";
import style from "./Hero.module.css";

export const Hero = ({ title, thumbnail }) => {
  return (
    <div className={style.heroContainer}>
      <div
        className={style.heroThumbnailContainer}
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <Container className={style.footerContainer}>
        <Grid>
          <Item xxlSpan={2} xlSpan={2} lgSpan={2} mdSpan={8} smSpan={4}></Item>
          <Item xxlSpan={8} xlSpan={8} lgSpan={8} mdSpan={8} smSpan={4}>
            <h1 className={style.heroTitle}>{title}</h1>
          </Item>
          <Item xxlSpan={2} xlSpan={2} lgSpan={2} mdSpan={8} smSpan={4}></Item>
        </Grid>
      </Container>
    </div>
  );
};

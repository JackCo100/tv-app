import { Container, Grid, Item } from "../../components/Grid";
import { Layout } from "../layout";
import { useStore } from "../../store";
import { Hero } from "../../components/Hero";
import { getShows } from "../../api";
import { useEffect, useState } from "react";
import { Carousel } from "../../components/Carousel";
import { heroContent } from "../../content/hero";
import styles from "./Home.module.css";

export const Home = () => {
  const { shows, setShows } = useStore();
  const [groupedShows, setGroupedShows] = useState({});

  useEffect(() => {
    getShows().then((data) => {
      setShows(data);
    });
  }, [setShows]);

  useEffect(() => {
    const grouped = shows.reduce((acc, show) => {
      const genre = show.genres[0] || "Unknown";
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push(show);
      return acc;
    }, {});

    setGroupedShows(grouped);
  }, [shows]);

  // console.log("groupedShows", groupedShows, shows);
  return (
    <Layout>
      <Hero title={heroContent.title} thumbnail={heroContent.thumbnail} />
      {Object.keys(groupedShows).map((genre) => (
        <Container className={`${styles.carouselSection}`} key={genre}>
          <div className={styles.blurBackground}></div>
          <Grid>
            <Item
              key={genre}
              xxlSpan={12}
              xlSpan={12}
              lgSpan={12}
              mdSpan={8}
              smSpan={4}
            >
              <Carousel title={genre} cards={groupedShows[genre]} />
            </Item>
          </Grid>
        </Container>
      ))}
    </Layout>
  );
};

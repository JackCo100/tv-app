import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Layout } from '../layout';
import { Container, Grid, Item } from '../../components/Grid';
import { getAlternateShows, getShowDetails } from '../../api';
import { FiChevronLeft } from 'react-icons/fi';
import { FaImdb } from 'react-icons/fa';
import { useStore } from '../../store';
import styles from './Details.module.css';

export const Details = () => {
  const [episodes, setEpisodes] = useState([]);
  const { shows, setShows, alternateShows, setAlternateShows } = useStore();
  const { id } = useParams();

  useEffect(() => {
    getShowDetails(id).then((data) => {
      setShows(data);
      setEpisodes(data?._embedded.episodes);
    });
    getAlternateShows(id).then((data) => {
      setAlternateShows(data._embedded?.alternateepisodes || []);
    });
  }, [id]);

  console.log(shows);
  return (
    <Layout>
      <Container className={'mainContent'}>
        <FiChevronLeft
          onClick={() => window.history.back()}
          className={styles.backButton}
        />
        <Grid>
          <Item xxlSpan={4} xlSpan={4} lgSpan={4} mdSpan={4} smSpan={4}>
            <div className={styles.imageContainer}>
              <img src={shows?.image?.original} alt={shows?.name} />
            </div>
          </Item>
          <Item xxlSpan={8} xlSpan={8} lgSpan={8} mdSpan={4} smSpan={4}>
            <div className={styles.detailsContainer}>
              <div dangerouslySetInnerHTML={{ __html: shows?.summary }} />
              {shows?.averageRuntime && <p>Run time: {shows.averageRuntime}</p>}
              {shows?.genres?.length > 0 && <p>Genres: {shows.genres.join(', ')}</p>}
              {shows?.rating?.average && <p>Rating: {shows.rating.average}</p>}
              {shows?.premiered && <p>Premiered: {shows.premiered}</p>}
              {shows?.ended && <p>Ended: {shows.ended}</p>}
              {shows?.externals?.imdb && (
                <a
                  href={`https://www.imdb.com/title/${shows?.externals.imdb}/`}
                  target="_blank"
                >
                  <FaImdb className={styles.externalLinksIcon} />
                </a>
              )}
            </div>
          </Item>
        </Grid>
        {episodes?.length > 0 && <h2>Episodes</h2>}
        <Grid className={styles.episodesContainer}>
          {episodes.length > 0 &&
            episodes.map((episode) => (
              <Item
                xxlSpan={2}
                xlSpan={2}
                lgSpan={3}
                mdSpan={2}
                smSpan={2}
                className={styles.episodeCard}
              >
                <img src={episode.image.medium} />
                <h3 className={styles.episodeTitle}>
                  {episode.number}: {episode.name}
                </h3>
              </Item>
            ))}
        </Grid>
        {alternateShows?.length > 0 && <h2>Alternate Shows</h2>}
        <Grid className={styles.altImageContainer}>
          {alternateShows?.length > 0 &&
            alternateShows.map((altShow) => (
              <Item
                key={altShow.id}
                xxlSpan={2}
                xlSpan={2}
                lgSpan={3}
                mdSpan={2}
                smSpan={4}
                className={styles.altShowCard}
              >
                <h3>{altShow.name}</h3>
                <p>Type: {altShow.type}</p>
              </Item>
            ))}
        </Grid>
      </Container>
    </Layout>
  );
};

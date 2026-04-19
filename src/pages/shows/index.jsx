import { Card } from '../../components/Card';
import { Searchbar } from '../../components/Searchbar';
import { Grid, Item } from '../../components/Grid';
import { Sidebar } from '../../components/Sidebar';
import { Layout } from '../layout';
import { useStore } from '../../store';
import { use, useEffect, useState } from 'react';
import { getSearchedShows, getShows } from '../../api';
import { Pagination } from '../../components/Pagination';

export const Shows = () => {
  const { query, shows, setShows } = useStore();
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
    if (!query) {
      getShows().then((data) => {
        console.log('Fetched all shows:', data);
        setShows(data);
      });
      return;
    }
    getSearchedShows(query).then((data) => {
      console.log('Fetched shows for query:', query, data);
      setShows(data);
    });
  }, [, query]);

  return (
    <Layout>
      <Grid>
        <Item xxlSpan={2} xlSpan={2} lgSpan={2} mdSpan={2} smSpan={1}>
          <Sidebar />
        </Item>
        <Item xxlSpan={10} xlSpan={10} lgSpan={10} mdSpan={6} smSpan={3}>
          <div className={'mainContent'}>
            <h1>Shows</h1>
            <Searchbar />
            <Grid>
              {shows
                .filter((show) => show.name.toLowerCase().includes(query.toLowerCase()))
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((card) => (
                  <Item
                    key={card.id}
                    xxlSpan={3}
                    xlSpan={4}
                    lgSpan={4}
                    mdSpan={4}
                    smSpan={4}
                  >
                    <Card {...card} />
                  </Item>
                ))}
            </Grid>
            <Pagination
              currentPage={currentPage}
              totalPages={shows.length > 0 ? Math.ceil(shows.length / itemsPerPage) : 1}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </Item>
      </Grid>
    </Layout>
  );
};

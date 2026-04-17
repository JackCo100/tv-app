import { Card } from '../../components/Card';
import { Searchbar } from '../../components/Searchbar';
import { Grid, Item } from '../../components/Grid';
import { Sidebar } from '../../components/Sidebar';
import { Layout } from '../layout';
import { useStore } from '../../store';

export const Home = () => {
    const {query, results} = useStore();
    return (
        <Layout>
            <Grid>
                <Item xxlSpan={2} xlSpan={2} lgSpan={2} mdSpan={2} smSpan={1}>
                        <Sidebar />
                </Item>
                <Item xxlSpan={10} xlSpan={10} lgSpan={10} mdSpan={6} smSpan={3}>
                    <div className={'mainContent'}>
                        <h1>Welcome to the TV App</h1>
                    <Searchbar />
                        <p>Search results for "{query}"</p>
                        <Grid>
                            {results.map((card) => (
                                <Item key={card.id} xxlSpan={3} xlSpan={4} lgSpan={4} mdSpan={4} smSpan={4}>
                                    <Card {...card} />
                                </Item>
                            ))}
                        </Grid>
                    </div>
                </Item>
            </Grid>
        </Layout>
    );
}
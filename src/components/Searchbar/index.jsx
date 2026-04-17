import styles from './Searchbar.module.css';
import { useStore } from '../../store';
import { useEffect } from 'react';
import { getMovies } from '../../api';

export const Searchbar = () => {
    const {query, setQuery, setResults} = useStore();
    const url = new URL(window.location.href);

    const handleSearch = async (e) => {
        e.preventDefault();
        getMovies(query).then((data) => {
            setResults(data);
        });
    }

    useEffect(() => {
        const q = url.searchParams.get('q');
        if (q) {
            setQuery(q);
            getMovies(q).then((data) => {
                setResults(data);
            });
        }
    }, []);

    return (
        <div className={styles.searchBar}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        e.preventDefault();
                        setQuery(e.target.value);
                        url.searchParams.set('q', e.target.value);
                        window.history.replaceState({}, '', url);
                        getMovies(e.target.value).then((data) => {
                            setResults(data);
                        });
                    }}
                    placeholder="Search for movies..."
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
        </div>
    )
}
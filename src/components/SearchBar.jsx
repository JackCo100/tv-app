import styles from './SearchBar.module.css'
export default function SearchBar( {handleSearch, searchTerm, handleSearchTermChange}){
    return(
    <div id={styles.searchBar}>
        <h1>For the TV obsessed</h1>
        <p>Find out everything about your favourite TV shows.</p>
        <form onSubmit={handleSearch}>
          <input value={searchTerm} onChange={handleSearchTermChange} type="text" placeholder="Search for TV show" />
          <button type="submit">Search </button>
        </form>
      </div>
    )
}
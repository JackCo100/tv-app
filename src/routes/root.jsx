import Card from'../Components/Card';
//import Navbar  from 'react-bootstrap/Navbar';
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import SearchBar from '../components/SearchBar';

function ResultsContainer({results, showResults, searchTerm}){
  if (showResults == true)
  return(
    <>
      <h3>Search results for: {searchTerm}</h3>
      <div class="flex-container">
        {results.map(results =>
          <Card 
            key = {results.show.id}
            imageUrl={results.show.image != null ? results.show.image.medium : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} 
            title = {results.show.name}
            genres = {results.show.genres}
            showId = {results.show.id}
            
            />

        )}
      </div>
      </>

)}

function Root() {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
        console.log(searchTerm)
    }
    

    const handleSearch = (event) => {
        event.preventDefault()
        axios
            .get("https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(searchTerm))
            .then((response) => {
                setResults(response.data);
                setShowResults(true)
                console.log(results)
            })
    }

  return (
    <>
      {/*<Navbar expand="lg" bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="/">TV Lovers</Navbar.Brand>
        </Container>
  </Navbar>*/}
  <Navbar />
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange}/>
      {/*<div id="searchBar">
        <h1>For the TV obsessed</h1>
        <p>Find out everything about your favourite TV shows.</p>
        <form onSubmit={handleSearch}>
          <input value={searchTerm} onChange={handleSearchTermChange} type="text" placeholder="Search for TV show" />
          <button type="submit">Search </button>
        </form>
      </div>
         <SearchForm value = {searchTerm} onChange = {handleSearchTermChange} onSubmit={handleSearch}/>
        <Form onSubmit = {handleSearch}>
          <Form.Group className="mb-3" controlId="formSearch">
            <Row>
              <Col>
                <Form.Control value={searchTerm} onChange={handleSearchTermChange} type="text" placeholder="Search for TV show" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Search </Button>
              </Col>
            </Row>
          </Form.Group>
</Form> */}
      <div class="resultContent">
        <ResultsContainer results ={results} showResults={showResults} searchTerm={searchTerm}/>
      </div>
    </>
  )
}

export default Root

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar  from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function Root() {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
    }
    

    const handleSearch = (event) => {
        event.preventDefault()
        axios
            .get("https://api.tvmaze.com/search/shows?q=" + searchTerm)
            .then((response) => {
                setResults(response.data);
                console.log(results)
            })
    }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand >TV Lovers</Navbar.Brand>
      </Navbar>
        
      <Container fluid="xl" id="searchBar">
        <h1>For the TV obsessed</h1>
        <p>Find out everything about your favourite TV shows.</p>
        <Form onSubmit = {handleSearch}>
          <Form.Group className="mb-3" controlId="formSearch">
            <Form.Label>Search</Form.Label>
            <Form.Control value={searchTerm} onChange={handleSearchTermChange} type="text" placeholder="Search for TV show" />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form.Group>
        </Form>
      </Container>
      <ul>
        {results.map(results =>
            <li>{results.show.name}</li>
        )}
      </ul>
    </>
  )
}

export default Root

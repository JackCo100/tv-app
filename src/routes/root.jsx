import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from'react-bootstrap/Card';
//import Navbar  from 'react-bootstrap/Navbar';
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function ResultsContainer({results, showResults, searchTerm}){
  console.log(showResults)
  if (showResults == true)
  return(
  <Container fluid="xl" id="searchResults">
    <h3>Search results for: {searchTerm}</h3>
      <Row>
          {results.map(results =>
          <Col sm={3}>
              <Card key={results.show.id} >
              <Card.Img variant="top" src={results.show.image != null ? results.show.image.medium : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} sm={3}/>
              <Card.Body>
                  <Card.Title>{results.show.name}</Card.Title>
                  <Card.Text>
                  {results.show.genres.toString()}
                  </Card.Text>
                  <Card.Link href={"/detail/"+ results.show.id}>Details</Card.Link>
              </Card.Body>
              </Card>
              </Col>
          )}
      </Row>
  </Container>

)}

function Root() {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
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
        
      <Container fluid="xl" id="searchBar" className="p-3">
        <h1>For the TV obsessed</h1>
        <p>Find out everything about your favourite TV shows.</p>
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
        </Form>
      </Container>
      <ResultsContainer results ={results} showResults={showResults} searchTerm={searchTerm}/>
    </>
  )
}

export default Root

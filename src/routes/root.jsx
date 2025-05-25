
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar  from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function Root() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand >TV Lovers</Navbar.Brand>
      </Navbar>
        
      <Container fluid="xl" id="searchBar">
        <h1>For the TV obsessed</h1>
        <p>Find out everything about your favourite TV shows.</p>
        <Form>
          <Form.Group className="mb-3" controlId="formSearch">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" placeholder="Search for TV show" />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default Root

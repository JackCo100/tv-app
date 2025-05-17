import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <>
      <p>TV App</p>
      <Form>
        <Form.Group className="mb-3" controlId="formSearch">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="Search for TV show" />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default App

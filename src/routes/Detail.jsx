import { useState, useEffect } from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import { useParams } from "react-router";
import axios from 'axios'
import { Col, Container, Image, Row } from 'react-bootstrap';

function Detail() {
  const [result,setResult] = useState([])
  const urlBuilder = "https://api.tvmaze.com/shows/" + String(useParams().id)
  console.log(urlBuilder)
  useEffect(() => {
    axios
              .get(urlBuilder)
              .then((response) => {
                  setResult(response.data);
                  console.log(result)
              })
    }, []);

    return(
      <>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
          <Container>
            <Navbar.Brand href="/">TV Lovers</Navbar.Brand>
          </Container>
        </Navbar>
        <Container fluid="xl" id="DetailCard">
          <Row> 
            <Col sm={3}>
              <Image src={result.image != null ? result.image.original : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} fluid />
            </Col>
            <Col>
              <h1>{result.name}</h1>
              <h4>{result.genres != null ? result.genres.toString(): "No Genres Available"}</h4>
              <h4>Rating: {result.rating != null ? result.rating.average : "Not Available"}</h4>
              <h4>{result.premiered  != null ? result.premiered.substring(0,4) : "No Date Available"} -  {result.ended != null ?  result.ended.substring(0,4) : ""}</h4>
              <p>{result.summary}</p>
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default Detail;

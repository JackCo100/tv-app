import { useState, useEffect } from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import { useParams } from "react-router";
import axios from 'axios'

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
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand >TV Lovers</Navbar.Brand>
        </Navbar>
        {result.name}
        {result.summary}
      </>
    )
}

export default Detail;

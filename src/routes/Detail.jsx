import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { useParams } from "react-router";
import axios from 'axios'

function Detail() {
  const [result,setResult] = useState([])
  const urlBuilder = import.meta.env.VITE_apiBaseUrl + "/shows/" + String(useParams().id)
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
        <Navbar />
        <div className='detail-container'>
              <div className='detailImage'>
                <img src={result.image != null ? result.image.original : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}  />
              </div>
              <div className='detailInfo'>
                <h1>{result.name}</h1>
                <h4>{result.genres != null ? result.genres.toString(): "No Genres Available"}</h4>
                <h4>Rating: {result.rating != null ? result.rating.average : "Not Available"}</h4>
                <h4>{result.premiered  != null ? result.premiered.substring(0,4) : "No Date Available"} -  {result.ended != null ?  result.ended.substring(0,4) : ""}</h4>
                <p>{result.summary}</p>
              </div>
        </div>
      </>
    )
}

export default Detail;

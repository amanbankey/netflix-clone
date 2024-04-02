import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({title, fetchUrl, isLargeRow}) => {
  //  console.log("mv",movieTrailer);
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

      async function fetchData() {
        try{
           const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
           console.log(response.data.results);
           setMovies(response.data.results);
          return response;
        }catch(error){
            console.error(error);
        }
          
      };
     
  useEffect(() => {
      fetchData();
   },[])
 
   function handleClick(movie) {
      if(trailerUrl) {
          setTrailerUrl("");
      }else{
         movieTrailer(movie?.name || "").then((url) => {
             const urlParams = new URLSearchParams(new URL(url).search);
             console.log("ujhkhk:  ",urlParams);
             setTrailerUrl(urlParams.get("v"))  // use
         }).catch((error) => console.log(error))
      }
     setMovies(movies);
   }
  
  const opts ={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  }
  return (
    <div className='row'>
         <h2 className=''>{title}</h2>
         <div className='row-posters'>
          {
                movies &&
                movies.map((movie) => (
                    <img onClick={() => handleClick(movie)}
                    key={movie.id}
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                    src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    />
                ))
          }
         </div>
           { 
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
           }
    </div>
  )
}

export default Row

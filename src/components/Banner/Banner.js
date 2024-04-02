import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Banner.css";
import api from '../../api/api'

const Banner = () => {
   const [movie, setMovie] = useState([]);
    
      async function fetchData() {
        try{
          const response = await axios.get(`${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`)
          setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
          // console.log(" res :",    response.data.results);
          return response;
        }catch( error ){
          console.log( "error" );
        } 
      };
    useEffect(() => {
       fetchData();
    },[])
     const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
     };

  return (
    <>
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        height:"100vh",
        width:"1510px",
        backgroundPosition:"center center", 
      }} >
      <div className='banner-contents'> 
          <h1 className='banner-title  '>
             {movie?.title || movie?.name || movie?.originam_name}
          </h1>
          <div className='banner-buttons '>
              <button className='banner-button'> Play </button>
              <button className='banner-button'>My List </button>
          </div>
          <h1 className='banner-description'> {truncate(movie?.overview, 150)}</h1>
      </div>  
        <div className='banner-fadeBottom'>    </div>
    </header>
  
    </>
    
  )
}

export default Banner

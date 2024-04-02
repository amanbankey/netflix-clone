import React from 'react'
import  Row from '../components/Row/Row'
import api from '../api/api'
import Nav from '../components/Nav/Nav'
import Banner from '../components/Banner/Banner'

const NetFlixShow = () => {
  // console.log(api);
  return (
    <div>
        <Nav />
        <Banner />
        <Row title="NETFLIX ORIGINAL" fetchUrl = {api.fetchNetflixOriginals} isLargeRow  />
        <Row title="Trending Now" fetchUrl = {api.fetchTrending}   />
        <Row title="Top Rated" fetchUrl = {api.fetchTopRated}   />
        <Row title="Action movies" fetchUrl = {api.fetchActionMovies}   />
        <Row title="Comedy movies" fetchUrl = {api.fetchComedyMovies}   />  
        <Row title="Horror movies" fetchUrl = {api.fetchHorrorMovies}   />
        <Row title="Romance movies" fetchUrl = {api.fetchRomanceMovies}   />
        <Row title="Documentaries" fetchUrl = {api.fetchDocumentaries}   /> 

    </div>
  )
}

export default NetFlixShow
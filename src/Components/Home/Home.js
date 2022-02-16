import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import './Home.css';
import MovieList from '../MovieList/MovieList';
function Home(){

    
    return (
   <>
         <MovieList/>  
        </>
    )



}
export default Home
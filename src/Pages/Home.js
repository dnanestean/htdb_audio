import React from 'react'

//Components
import Header from '../Components/Header'
import Container from '../Components/Container'
import Footer from '../Components/Footer'


const Homepage = ({baseUrl}) =>
  <div>
    <Header baseUrl={baseUrl}/>
    <Container content='cardView'/>
    <Footer/>
  </div>


export default Homepage
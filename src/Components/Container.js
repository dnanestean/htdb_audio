import React from 'react'
import styled from 'styled-components'

import CardView from './Body/Cardpage/CardView'
import ListView from  './Body/Listpage/ListView'


//Data
import dataCards from '../Data/Homepage/homeCards'
import dataTowers from '../Data/TowerCategory/towers'


const StyledContainer = styled.section`

  max-width: 96rem
  margin: 3rem auto
  width: 100%
  
  div{
    margin:0
    width:100%
  }

  @media (min-width:600px) {
    margin: 5rem auto
  }
  
  @media (min-width:1024px) {
    margin: 7rem auto
  }
 }
`


const Container = ({ content }) => {
  if(content === 'listView') {
    return (
      <StyledContainer>
        <ListView content={dataTowers.towers}/>
      </StyledContainer>
    )
  } else {
    return (
      <StyledContainer>
        <CardView content={dataCards.homeCards}/>
      </StyledContainer>
    )
  }
}


export default Container
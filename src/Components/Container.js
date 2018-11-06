import React from 'react'
import styled from 'styled-components'
import { Provider } from "../Context";

//Components
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


const Container = ({ content }) =>

  <StyledContainer>

    {(content === 'listView') &&
    <Provider value={dataTowers}>
      <ListView />
    </Provider>
    }

    {(content === 'cardView') &&
    <Provider value={dataCards}>
      <CardView />
    </Provider>
    }

  </StyledContainer>


export default Container
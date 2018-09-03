import React from 'react'
import styled from 'styled-components'
import { Router } from '@reach/router'

import HomeView from './Body/Homepage/HomeView'
import ListView from  './Body/Listpage/ListView'

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

const Container = () => (
  <StyledContainer>
    <Router>
      <HomeView path='/' />
      <ListView path='/towers' />
    </Router>

  </StyledContainer>
)

export default Container
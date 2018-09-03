import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import HomeBox from './HomeBox'


const StyledContainer = styled(Grid)`
  max-width: 96rem
  margin: 3rem auto
  width: 100%

  @media (min-width:600px) {
    margin: 5rem auto
  }
  
  @media (min-width:1024px) {
    margin: 7rem auto
  }
 }
`

const Body = () => (
  <StyledContainer container spacing={32}>

    <HomeBox title='Daily Heavenly Manna' link='/test'/>
    <HomeBox title='Songs in the Night'/>
    <HomeBox title='KJV Bible'/>
    <HomeBox title='Six Volumes and Tabernacle'/>
    <HomeBox title='Original Towers'/>
    <HomeBox title='The Photodrama of Creation'/>
    <HomeBox title='Hymns of Millennial Dawn'/>

  </StyledContainer>
)

export default Body
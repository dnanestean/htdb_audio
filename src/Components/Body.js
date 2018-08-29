import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import HomeBox from './HomeBox'


const StyledContainer = styled(Grid)`
  max-width: 96rem
  margin: 10rem auto
  width: 100%

  @media (max-width:600px) {
    margin: 3rem auto
  }
 }
`

const Body = () => (
  <StyledContainer container spacing={32}>

    <HomeBox title='Daily Manna'/>
    <HomeBox title='Songs In The Night'/>
    <HomeBox title='KJV Bible'/>
    <HomeBox title='Six Volume and Tabernacle'/>
    <HomeBox title='Original Towers'/>
    <HomeBox title='The Photodrama of Creation'/>
    <HomeBox title='Hymns of Millennial Dawn'/>

  </StyledContainer>
)

export default Body
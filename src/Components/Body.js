import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import HomeBox from './HomeBox'


const StyledContainer = styled(Grid)`
  max-width: 96rem
  margin: 10rem auto
 }
`

const Body = () => (
  <StyledContainer container spacing={32}>

    <HomeBox title='Title of the Block'/>
    <HomeBox title='Title of the Block'/>
    <HomeBox title='Title of the Block'/>
    <HomeBox title='Title of the Block'/>
    <HomeBox title='Title of the Block'/>
    <HomeBox title='Title of the Block'/>
    <HomeBox title='Title of the Block'/>
    <HomeBox title='Title of the Block'/>

  </StyledContainer>
)

export default Body
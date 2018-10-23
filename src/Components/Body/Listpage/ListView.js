import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

//Components
import Heading from '../../Common/Heading'
import ListItem from './ListItem'


const StyledContent = styled.div`
  padding: 0 1.6rem
  
  ul {
    margin-top: 4rem
  }
  
`


const ListView = ({content}) =>
  <Grid container spacing={32}>
    <StyledContent>
      <Heading text={`${content.heading}`}/>
      <ul>
        {content.items.map((item, index) => <ListItem key={index} href={item.link} text={item.title} />)}
      </ul>
    </StyledContent>
  </Grid>


export default ListView
import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


const StyledItem = styled(Paper)`
  text-align: center
  padding: 10rem 0
  transition: 0.3s;
  
  &:hover {
    background: #009F93
    
    h3 {
     color: white
    }
  }
  
  h3 {
    font-size: 2.4rem
  }
`

const HomeBox = (props) => (
  <Grid item xs={4}>
    <a href="">
      <StyledItem elevation={3}>
        <Typography variant="subheading">{props.title}</Typography>
      </StyledItem>
    </a>
  </Grid>
)

export default HomeBox
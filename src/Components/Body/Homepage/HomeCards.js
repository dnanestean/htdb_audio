import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Link } from '@reach/router'


const StyledItemContainer = styled(Grid)`
  min-height: 24.2rem
    
  @media (max-width:600px) {
    min-height: 15rem
  } 
`

const StyledItem = styled(Paper)`

  text-align: center
  padding: 5rem 0
  transition: 0.2s;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  
  &:hover {
    background: #009F93
    
    h3 {
     color: white
    }
  }
  
  h3 {
    font-size: 2rem
  }
  
  @media (min-width:600px) {
    padding: 7rem 1rem
    
    h3 {
      font-size: 2.4rem
    }
  }
  
`

const HomeCards = (props) => (
  <StyledItemContainer item xs={12} sm={6} md={4}>
    <Link to={`${props.link}`}>
      <StyledItem elevation={3}>
        <Typography variant="subheading">{props.title}</Typography>
      </StyledItem>
    </Link>
  </StyledItemContainer>
)

export default HomeCards
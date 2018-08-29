import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


const StyledItemContainer = styled(Grid)`
  min-height: 24.2rem
    
`

const StyledItem = styled(Paper)`
  text-align: center
  padding: 7rem 1rem
  transition: 0.3s;
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
    font-size: 2.4rem
  }
  
  @media (max-width:600px) {
    padding: 7rem 0
    
    h3 {
      font-size: 2rem 
    }
  }
  
`

const HomeBox = (props) => (
  <StyledItemContainer item xs={12} sm={6} md={4}>
    <a href="">
      <StyledItem elevation={3}>
        <Typography variant="subheading">{props.title}</Typography>
      </StyledItem>
    </a>
  </StyledItemContainer>
)

export default HomeBox
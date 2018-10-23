import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'


const StyledItem = styled.li`
 
  color: black
  margin-bottom: 2rem
  
  a {
    padding: 1.3rem 3rem
    display: block
  }   
     
  h3 {
    font-size: 2.4rem
    font-weight: 300
  }
    
  &:nth-child(even) {
    background: #E5E5E5
  }
  
  &:nth-child(odd) {
    background: #F4F4F4
  }
    
`


const ListItem = ({href, text}) =>
    <StyledItem>
      <a href={`${href}`} target='_blank' rel="noopener noreferrer">
        <Typography variant="subheading">{text}</Typography>
      </a>
    </StyledItem>


export default ListItem
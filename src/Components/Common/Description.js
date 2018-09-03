import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'


const StyledDescription = styled(Typography)`

  font-size: 1.8rem
  font-weight: 300
  color: white
  
  @media (max-width: 600px) {
    font-size: 1.6rem
  }

`

const Description = props =>
  (
    <StyledDescription variant="subheading">
      {props.text}
    </StyledDescription>

  )


export default Description

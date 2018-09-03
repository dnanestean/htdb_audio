import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'


const StyledHeading = styled(Typography)`

  font-size: 3.6rem
  margin-bottom: 2.1rem
  color: white
  
  @media (max-width: 600px) {
    font-size: 2.6rem
  }

`

const Heading = props =>
  (
    <StyledHeading variant="title">
      {props.text}
    </StyledHeading>
  )


export default Heading

import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'


const StyledFooter = styled.footer`
  background: #000
  text-align: center
  padding: 6.1rem 0
  
  & h3 {
    color: white
    font-size: 1.8rem
    font-weight: 300
  }
`

const Footer = () => (
  <StyledFooter>
    <Typography variant="subheading">
      © 2016 · HTDB Audio · All rights reserved
    </Typography>
  </StyledFooter>
)

export default Footer
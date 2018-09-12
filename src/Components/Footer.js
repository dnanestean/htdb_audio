import React from 'react'
import styled from 'styled-components'

//Components
import Description from './Common/Description'


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
    <Description text="© 2016 · HTDB Audio · All rights reserved"/>
  </StyledFooter>
)

export default Footer
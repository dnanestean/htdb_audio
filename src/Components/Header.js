import React from 'react'
import styled from 'styled-components'

//Components
import Heading from './Common/Heading'
import Description from "./Common/Description";


const StyledHeader = styled.header`

  background: #009F93
  padding: 5.3rem 0
  color: white
  
  > div {
    max-width: 96rem
    margin: 0 auto
    padding: 0 1.6rem
  }
  
  @media (max-width: 600px) {
    padding: 3rem 0
    
    > div {
      text-align: center
    }
  }

`

const Header = () =>
  (
    <StyledHeader>
      <div>
        <Heading text="HTDB Audio"/>
        <Description text="Complete Audio of the Harvest Message and the KJV Bible"/>
      </div>
    </StyledHeader>
  );


export default Header

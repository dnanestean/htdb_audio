import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

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

class Header extends React.Component {
  state = {
    isHome: true
  }

  changePage = () => (
    this.setState({
      isHome: false
    })
  )


  render() {
    return (
      <StyledHeader>
        <div>
          <Link to="/">
            <Heading bolded="true" primary="true" text="HTDB Audio"/>
          </Link>
          <Description text="Short description of what the website is about"/>
        </div>
      </StyledHeader>
    );
  }
}



export default Header

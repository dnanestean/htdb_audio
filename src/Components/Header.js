import React from 'react'
import Typography from '@material-ui/core/Typography'

import styled from 'styled-components'


const StyledHeader = styled.section`
  background: #009F93
  padding: 5.3rem 0
  color: white
  
  > div {
    max-width: 96rem
    margin: 0 auto
  }
  
  & h2, h3 {
    color: white
  }
  
  & h2 {
    font-size: 3.6rem
    margin-bottom: 2.1rem
  }
  
  & h3 {
    font-size: 2.4rem
    font-weight: 300
  }

`

const Header = () =>
  (
    <StyledHeader>
      <div>
        <Typography variant="title">
          HTDB Audio
        </Typography>
        <Typography variant="subheading">
          Short description of what the website is about
        </Typography>
      </div>
    </StyledHeader>
  );


export default Header

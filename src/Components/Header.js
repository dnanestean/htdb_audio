import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import styled from 'styled-components'


const StyledAppBar = styled(AppBar)`
  background: #009F93
  padding: 5.3rem 0
  color: white
  display: block
  
  > div {
    flex-direction: column
    align-items: initial
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

function SimpleAppBar(props) {
  return (
    <div>
      <StyledAppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title">
            HTDB Audio
          </Typography>
          <Typography variant="subheading">
            Short description of what the website is about
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default SimpleAppBar

import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'


const StyledHeader = styled.header`
  background: #009F93
  padding: 5.3rem 0
  color: white
  
  > div {
    max-width: 96rem
    margin: 0 auto
    padding: 0 1.6rem
  }
  
  & h2, h3 {
    color: white
  }
  
  & h2 {
    font-size: 3.6rem
    margin-bottom: 2.1rem
  }
  
  & h3 {
    font-size: 1.8rem
    font-weight: 300
  }
  
  @media (max-width: 600px) {
    padding: 3rem 0
    
    > div {
      text-align: center
    }
    
    & h2 {
      font-size: 2.6rem
    }
  
    & h3 {
      font-size: 1.6rem
    }
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
          Complete Audio of the Harvest Message and the KJV Bible
        </Typography>
      </div>
    </StyledHeader>
  );


export default Header

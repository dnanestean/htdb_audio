import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Link } from '@reach/router'
import { Consumer } from "../../../Context";


const StyledItemContainer = styled(Grid)`
  min-height: 24.2rem
    
  @media (max-width:600px) {
    min-height: 15rem
  } 
`

const StyledHeading = styled(Paper)`
  text-align: center
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #009F93
  padding: 2.3rem 0 2.7rem;
  
  h3 {
   color: white
   font-size: 2rem
  }
  
  @media (min-width:600px) {
    padding: 3.3rem 0 3.7rem;
    
    h3 {
      font-size: 2.4rem
    }
  }
`

const StyledContent = styled.div`
  height: 200px
  border: 1px solid black
`

const CalendarItem = ({index}) =>
  <Consumer>
    {({ calendarCards }) =>(
      <StyledItemContainer item xs={12} sm={6} >
        <StyledHeading elevation={3}>
          <Typography variant="subheading">{calendarCards[index].title}</Typography>
        </StyledHeading>
        <StyledContent>
          {/*{calendarCards[index].days.map((item, i) => <Link to="#" >{item[i].number}</Link>)}*/}
        </StyledContent>
      </StyledItemContainer>
    )}
  </Consumer>



export default CalendarItem
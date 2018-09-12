import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

//Components
import Heading from '../../Common/Heading'
import ListItem from './ListItem'

//Data
import data from '../../../Data/TowerCategory/towers'


const StyledContent = styled.div`
  padding: 0 1.6rem
  
  ul {
    margin-top: 4rem
  }
  
`

const ListView = () => (
  <Grid container spacing={32}>
    <StyledContent>
      <Heading text={`${data.towers.heading}`}/>
      <ul>
        {data.towers.items.map((tower, index) => <ListItem key={index} href={tower.link} text={tower.title} />)}
      </ul>
    </StyledContent>
  </Grid>
)

export default ListView
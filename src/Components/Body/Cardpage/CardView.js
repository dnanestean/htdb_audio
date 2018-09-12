import React from 'react'
import Grid from '@material-ui/core/Grid'

//Components
import CardItem from './CardItem'

//Data
import data from '../../../Data/Homepage/homeCards'

const CardView = () => (
  <Grid container spacing={32}>
    {data.homeCards.map((homeCard) => <CardItem text={homeCard.title} href={homeCard.link}/>)}
  </Grid>
)

export default CardView
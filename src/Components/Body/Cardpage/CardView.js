import React from 'react'
import Grid from '@material-ui/core/Grid'

//Components
import CardItem from './CardItem'


const CardView = ({content}) => (
  <Grid container spacing={32}>
    {content.map((item) => <CardItem key={item.id} text={item.title} href={item.link}/>)}
  </Grid>
)


export default CardView
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Consumer } from "../../../Context";

//Components
import CardItem from './CardItem'


const CardView = () =>
  <Consumer>
    {({ homeCards }) => (
      <Grid container spacing={32}>
        {homeCards.map((item, index) => <CardItem key={item.id} index={index}/>)}
      </Grid>
    )}
  </Consumer>


export default CardView
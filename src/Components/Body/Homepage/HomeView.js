import React from 'react'
import Grid from '@material-ui/core/Grid'

//Components
import HomeCards from './HomeCards'

const HomeView = () => (
  <Grid container spacing={32}>

    <HomeCards title='Daily Heavenly Manna'/>
    <HomeCards title='Songs in the Night'/>
    <HomeCards title='KJV Bible'/>
    <HomeCards title='Six Volumes and Tabernacle'/>
    <HomeCards title='Original Towers' link='/towers'/>
    <HomeCards title='The Photodrama of Creation'/>
    <HomeCards title='Hymns of Millennial Dawn'/>

  </Grid>
)

export default HomeView
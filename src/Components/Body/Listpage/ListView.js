import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'


const StyledContent = styled.div`
  
  
  
`

const ListView = () => (
  <Grid container spacing={32}>
    <StyledContent>
      <Typography variant="title">
        Towers
      </Typography>
    </StyledContent>

  </Grid>
)

export default ListView
import Container from '@mui/material/Container'
import React from 'react'
import MoviesList from '../components/MoviesList'
import Grid from '@mui/material/Grid'
import Filters from '../components/Filters'
import Box from '@mui/material/Box'

export default function MoviesPage() {
  return (
    <>
        <Box sx={{
            marginTop: 12,
        }}>
        <Grid container spacing={0}>
          <Grid item xs={3} sx={{
          display: 'flex',
          justifyContent: 'center',
        }}> 
              <Filters/>
          </Grid>
          <Grid item xs={7}>
              <MoviesList gridItemSize={6} paginationType='pages'/>
          </Grid>
        </Grid>
        </Box>
    </>
  )
}

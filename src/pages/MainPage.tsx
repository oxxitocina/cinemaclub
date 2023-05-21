import React from 'react'
import MainPageSwiper from '../components/MainPageSwiper/MainPageSwiper'
import Container from '@mui/material/Container'
import GenresSlider from '../components/GenresSlider/GenresSlider'
import MoviesSlider from '../components/MoviesSlider/MoviesSlider'
import MainPageMoviesList from '../components/MainPageMoviesList'

export default function MainPage() {
  return (
    <>
        <MainPageSwiper />
        <Container>
            <GenresSlider />
            <MoviesSlider />
            <MainPageMoviesList />
        </Container>
    </>
  )
}

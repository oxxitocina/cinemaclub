import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom'
import SaveIcon from '../components/UI/SaveIcon/SaveIcon';
import BookmarkIcon from '../components/UI/LaterIcon/BookmarkIcon';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import MoviePlayer from '../components/MoviePlayer/MoviePlayer';
import TrailerPlayer from '../components/TrailerPlayer/TrailerPlayer';
import { useState } from 'react';
import { Divider } from '@mui/material';

export default function MoviePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const loading = useSelector((state) => state.movie.loading);
    const movieData = useSelector((state) => state.movie.movieData);
    const [showPlayer, setShowPlayer] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false)
    

    function getGenresArray()   {
        const genres = [];
        movieData.genres.map((genre) => {
            genres.push(genre.name)
        })
        return genres.join(', ');
    }
    const genres = getGenresArray();
    console.log(loading);
    console.log(movieData);

    function toggleMoviePlayer()    {
        if(showPlayer === true) {

            return (
                <Box sx={{
                    maxWidth: '100%',
                    width: '100vw',
                    height: '94vh',
                    zIndex: 90,
                    position: 'absolute',
                    paddingTop: 8,
                    
                }}>
                    <Button sx={{
                        position: 'absolute',
                        zIndex: 91,
                        top: '10%',
                        right: '5%',
                    }} onClick={() => {setShowPlayer(false)}}>X</Button>
                    <MoviePlayer id={movieData.id}/>
                </Box>
            )

        }
    }


  return (
    <>
        {toggleMoviePlayer()}

        <Box sx={{
            boxSizing: 'border-box',
            maxWidth: '100%',
            width: '100vw',
            height: '100vh',
            paddingTop: '6vh',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${movieData.poster.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
        }}>
            <Container>
                <Box sx={{
                    color : 'white',
                    display: 'flex',
                    height: '100vh',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        height: '50vh'
                    }}>
                    {/* <Typography variant='h2'>
                        {movieData.name}
                    </Typography> */}
                    <Box sx={{
                        width: '10vw'
                    }}>
                        <img style={{width: '100%'}} src={movieData.logo.url}></img>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        marginTop: 2
                    }}>
                        <Typography variant='subtitle1'>{movieData.rating.kp}</Typography>
                        <Divider orientation='vertical' flexItem sx={{backgroundColor: 'white'}}/>
                        <Typography variant='subtitle1'>{movieData.year}</Typography>
                        <Divider orientation='vertical' flexItem sx={{backgroundColor: 'white'}}/>
                        <Typography variant='subtitle1'>{movieData.movieLength}</Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        marginTop: 1
                    }}>
                        <Typography variant='subtitle1'>{movieData.countries[0].name}</Typography>
                        <Divider orientation='vertical' flexItem sx={{backgroundColor: 'white'}}/>
                        <Typography variant='subtitle1'>{genres}</Typography>
                        <Divider orientation='vertical' flexItem sx={{backgroundColor: 'white'}}/>
                        <Typography variant='subtitle1'>{movieData.ratingAgeLimits}</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '18vw',
                        justifyContent: 'space-between',
                        gap: 2,
                        marginTop: 1
                    }}>
                        <Button variant='contained' onClick={() => {setShowPlayer(true)}}>Смотреть</Button>
                        <Button variant='contained' onClick={() => {setShowTrailer(true)}}>Трейлер</Button>
                        <SaveIcon/>
                        <BookmarkIcon/>
                    </Box>
                    <Box sx={{
                        width: '25vw',
                        marginTop: 1
                    }}>
                        <Typography>
                            {movieData.shortDescription}
                        </Typography>
                    </Box>
                    </Box>
                    
                </Box>
                
                    

            </Container>             
        </Box>
    </>
  )
}


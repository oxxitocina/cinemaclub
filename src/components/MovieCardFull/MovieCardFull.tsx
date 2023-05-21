import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'
import SaveIcon from '../UI/SaveIcon/SaveIcon';
import BookmarkIcon from '../UI/LaterIcon/BookmarkIcon';

export default function MovieCardFull({data}) {
    const imagePath = data.poster_path || data.backdrop_path;
    const URL = `https://image.tmdb.org/t/p/w500/${imagePath}`;

  return (
    <>
        <Box component="div" onClick={console.log(1)} sx={{
            margin: '0 auto'
        }}>
            <Paper sx={{
                width: '85%',
                height: '28.5vh',
                borderRadius: '3%',
                cursor: 'pointer',
                backgroundImage: `url(${URL})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center top',
                    "&:hover": {
                        border: '2px solid #1976d2',
                        padding: 1,
                    }
            }}>
                <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '2px',
        }}>
            <SaveIcon/>
            <BookmarkIcon/>
        </Box>
            </Paper>
        </Box>
         <Typography variant='body2' sx={{
                color: 'white',
                marginTop: 1,
                width: '85%',
            }}>
                {data.title}
            </Typography>
    </>
  )
}

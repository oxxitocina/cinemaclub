import { Container, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import {footerList} from '../mock_data/footerList'
import { footerListSections } from '../mock_data/footerList'

export default function Footer() {

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          width: "100vw",
          height: "20vh",
          backgroundColor: "#0d0d0f",
          borderTop: "2px solid #1a171e",
          paddingBottom: 12,
        }}
      >
        <Container>
          <Grid container spacing={2}>
              <Grid item xs={5}>
              <Box sx={{
          color: 'white',
          marginTop: 3
        }}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                CINEMACLUB
            </Typography>

            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
               © 2023-2023 OOO "CINEMACLUB"
            </Typography>
        </Box>
              </Grid>
              <Grid item xs={7}>

                <Stack direction={'row'} spacing={12}>
                  
                <List sx={{
                color: 'white'
              }}>
                <Box>
                    <Typography variant="h5">
                        О нас
                    </Typography>
                  </Box>
                {footerList.map((link) => {
                  return (
                    <ListItem disablePadding={true} sx={{cursor: 'pointer'}}>
                    <ListItemText
                      primary={link}
                    />
                  </ListItem>
                  )
                })}
            </List>


            <List sx={{
                color: 'white'
              }}>
                <Box>
                    <Typography variant="h5">
                        Разделы
                    </Typography>
                  </Box>
                {footerListSections.map((link) => {
                  return (
                    <ListItem disablePadding={true} sx={{cursor: 'pointer'}}>
                    <ListItemText
                      primary={link}
                    />
                  </ListItem>
                  )
                })}
            </List>
                </Stack>

              </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

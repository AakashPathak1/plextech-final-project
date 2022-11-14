import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from './Card'
import Modal from './Modal';
import SpotButton from './SpotButton';
import Navbar from './Navbar';
import Data from "./data";
import { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <Navbar/>
      <GridSpots/>
    </>
  );
}

function GridSpots() {
  return (
    <>
    <Box alignitems="center" justifycontent="center" mt={3}>
      <Grid container spacing={1}>
        {Data.map((data, key) => (
            <Grid item key={key} xs={4}>
              <Card img={data.img} title={data.title} tag1={data.tags[0]} tag2={data.tags[1]}> Card</Card>
            </Grid>
          )
        )}
      </Grid>
    </Box>
    </>
  );
}

export default App;





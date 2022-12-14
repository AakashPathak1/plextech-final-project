import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from './Card'
import Modal from './Modal';
import SpotButton from './SpotButton';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  return (
    <>
      <Navbar/>
      <GridSpots/>
    </>
  );
}

function GridSpots() {
  const [Data, setData] = useState([])

  useEffect(() => {
    axios.get('/spots/all').then((res) => {
      setData(res.data)
      console.log(res.data)
    })

  },[])

  return (
    <>
    <Box display = "flex" alignitems="center" justifycontent="center" mt={3} sx={{ ml: 11 }}>
      <Grid container spacing={3} alignitems="center" >
        {Data.map((data, key) => (
            <Grid item key={key} xs={4} alignitems="center" justifycontent="center" >
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





import React, { useState } from 'react'
import { Box } from '@mui/system'

// Import Pages
import HeroBanner from '../HeroBanner';
import SearchExercises from '../SearchExercises';
import Exercises from '../Exercises';

const Home = () => {
  return (
    <Box>
       <HeroBanner />
       <SearchExercises />
       <Exercises />
    </Box>
  )
}

export default Home
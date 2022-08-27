import React, { useState } from 'react'
import { Box } from '@mui/system'

// Import Pages
import HeroBanner from '../HeroBanner';
import SearchExercises from '../SearchExercises';
import Exercises from '../Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
       <HeroBanner />
       <SearchExercises 
          setExercises={setExercises} 
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
       />
       <Exercises 
         setExercises={setExercises} 
         bodyPart={bodyPart}
         setBodyPart={setBodyPart}
       />
    </Box>
  )
}

export default Home
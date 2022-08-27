import React, {useState,  useEffect} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { execrisesOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () =>{
      const bobyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', execrisesOptions);
      setBodyParts(['all', ...bobyPartsData])
    }
    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search){
      const execrisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', execrisesOptions);
      // console.log(execrisesData)

      const searchedExecrises = execrisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExecrises);
    }
  }

  return (
    <Stack  alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize:{lg: '44px', xs: '30px'}}}
      mb="50px" textAlign="center">
          Awesome Exercises Yoo <br/> Should Know
      </Typography>

      <Box position="relative" mb="72px">
         <TextField sx={{input: {fontWeight:'700', border: 'none',
         borderRadius: '4px'}, width:{lg: '800px', xs: '350px'},
         background: '#fff', borderRadius: '40px'}} 
         height="76px" value={search} type="text"
         onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder="Search Execrises"/>
         
         <Button className="search-btn" onClick={handleSearch}
         sx={{bgcolor: '#FF2625', color: "#fff", textTransform: 'none',
           width: {lg: '175px', xs: '80px'},
           fontSize: {lg: '20px', xs: '14px'},
           height: '56px', position: "absolute", right: '0'}}
         >Search</Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>      
      </Box>
    </Stack>
  )
}

export default SearchExercises
import React from 'react'
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

// import assests
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
      
      {/* Left Section */}
      <Typography color="#FE2625"
      fontWidth="600" fontSize="26px">
          Fitness Club
      </Typography>

      <Typography fontWidth="700" 
       sx={{ fontSize: {lg: '44px', xs: '40px'} }}
       mb="23px" mt="30px">
          Sweat, Smile <br/> and Repeat
      </Typography>

      <Typography mb={4} lineHeight="35px" fontSize="22px">
          Check out the most effective Exercises
      </Typography>

      <Button variant="contained" color="error" href='#exercises'
      sx={{ backgroundColor: "#ff2625", padding: '10px'}}>Explore Exercises</Button>
     
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}}
        fontSize= "200px"
     >
        Exercises
      </Typography>

      {/* Right Section */}
      <img src={HeroBannerImage} alt="banner" 
      className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner
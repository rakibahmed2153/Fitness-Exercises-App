import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const exercisesCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{textDecoration: 'none'}}>
        <img src={exercise.gifUrl} alt="Exercise Name" loading="lazy"/>
        <Stack direction="row">
          <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', textDecoration: 'none',
                        fontSize: '12px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.bodyPart}
          </Button>
          <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757',
                        fontSize: '12px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.target}
          </Button>
        </Stack>
        <Typography ml="21px" color="#000" fontWeight="bold" mt="11px"
                    pb="10px" textTransform="capitalize">
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default exercisesCard
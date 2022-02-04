import React from 'react';
import imageSrc from './assets/404.png';
import { Box } from '@mui/material';


const NotFound: React.VFC = () => {
  return (
    <Box height="90vh" display="flex" alignItems="center" justifyContent="center">
      <img src={imageSrc} alt="Not found"/>
    </Box>
  );
};

export default NotFound;

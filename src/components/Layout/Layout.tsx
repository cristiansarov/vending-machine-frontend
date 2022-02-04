import React from 'react';
import { Grid, Container, Paper, Box } from '@mui/material';
import Sidebar from './components/Sidebar';


const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Box my={4}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Sidebar/>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <Box p={3} pt={2}>
                {children}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Layout;

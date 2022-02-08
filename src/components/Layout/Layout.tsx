import React from 'react';
import { Grid, Container, Paper, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import ActiveSessions from './components/ActiveSessions';


const Layout: React.FC = ({ children }) => (
  <Container>
    <Box my={4}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Sidebar/>
        </Grid>
        <Grid item xs={8}>
          <Paper>
            <Box p={3} pt={2}>
              <ActiveSessions/>
              {children}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default Layout;

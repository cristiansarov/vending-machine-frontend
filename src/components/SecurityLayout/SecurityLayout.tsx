import React from 'react';
import { Container, Paper, Box } from '@mui/material';


export interface LayoutProps {

}

const SecurityLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="xs">
      <Box my={4}>
        <Paper>
          <Box p={4}>
            {children}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default SecurityLayout;

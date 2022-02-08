import React, { useCallback } from 'react';
import { Alert, AlertTitle, Box, Button } from '@mui/material';
import { useSecurityStore } from '../../../modules/security/security.store';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../types/global.types';


const ActiveSessions: React.VFC = () => {
  const activeSessions = useSecurityStore((state) => state.currentUser?.activeSessions || 1);
  const logoutAll = useSecurityStore((state) => state.logoutAll);
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    logoutAll().finally(() => {
      navigate(Paths.login);
    });
  }, [logoutAll, navigate]);

  if (activeSessions === 1) return null;
  return (
    <Box mb={2}>
      <Alert color="warning">
        <AlertTitle>There are {activeSessions} active session on your account</AlertTitle>
        <Box mb={1}>Would you like to terminate all sessions?</Box>
        <Button size="small" color="inherit" variant="outlined" onClick={onLogout}>Terminate all sessions</Button>
      </Alert>
    </Box>
  );
};

export default ActiveSessions;

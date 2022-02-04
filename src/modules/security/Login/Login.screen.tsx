import React, { useCallback, useState } from 'react';
import SecurityLayout from '../../../components/SecurityLayout/SecurityLayout';
import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import { useSecurityStore } from '../security.store';
import { Navigate, useNavigate } from 'react-router-dom';
import { Paths } from '../../../types/global.types';


export interface LoginProps {

}

const LoginScreen: React.VFC<LoginProps> = () => {
  const isLoggedIn = useSecurityStore((state) => !!state.currentUser);
  const login = useSecurityStore((state) => state.login);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      await login({ username, password });
      navigate(Paths.products);
    } catch (e: any) {
      if (e.response.status === 400) {
        setErrorMessage('Invalid username or password');
      } else {
        setErrorMessage(e.message);
      }
    }
  }, [username, password]);

  if (isLoggedIn) {
    return <Navigate to={Paths.products} replace/>;
  }

  return (
    <SecurityLayout>
      <form onSubmit={onSubmit}>
        <Typography variant="h4">Test</Typography>
        <Box p={1}/>
        <TextField value={username} onChange={(e) => setUsername(e.target.value)} label="Username" fullWidth required />
        <Box p={1}/>
        <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" fullWidth required />
        {errorMessage && (
          <Box mt={1}>
            <Alert color="error">{errorMessage}</Alert>
          </Box>
        )}
        <Box p={1}/>
        <Button variant="contained" size="large" type="submit">Submit</Button>
      </form>
    </SecurityLayout>
  );
};

export default LoginScreen;

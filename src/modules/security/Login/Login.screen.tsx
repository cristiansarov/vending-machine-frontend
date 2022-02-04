import React from 'react';
import classes from './Login.module.scss';
import SecurityLayout from '../../components/SecurityLayout/SecurityLayout';
import { Input, TextField } from '@mui/material';


export interface LoginProps {

}

const Login: React.VFC<LoginProps> = () => {
  return (
    <SecurityLayout>
      LOGIN
      <TextField label="The text field" />
      <TextField label="The text field2" />
    </SecurityLayout>
  );
};

export default Login;

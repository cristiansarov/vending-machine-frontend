import React from 'react';
import classes from './Logout.module.scss';
import SecurityLayout from '../../../components/SecurityLayout/SecurityLayout';
import { Input, TextField } from '@mui/material';


export interface LogoutProps {

}

const Logout: React.VFC<LogoutProps> = () => {
  return (
    <SecurityLayout>
      LOGOUT
    </SecurityLayout>
  );
};

export default Logout;

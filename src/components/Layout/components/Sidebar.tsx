import React, { useMemo } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ListItemText from '@mui/material/ListItemText';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LogoutIcon from '@mui/icons-material/Logout';
import Paper from '@mui/material/Paper';
import { Paths } from '../../../types/global.types';
import { Link } from 'react-router-dom';


const Sidebar: React.VFC = () => {
  const menu = useMemo(() => [
    { icon: AttachMoneyIcon, label: 'Deposit', path: Paths.deposit },
    { icon: FastfoodIcon, label: 'Products', path: Paths.products },
    { icon: LogoutIcon, label: 'Logout', path: Paths.logout },
  ], []);

  return (
    <Paper>
      <MenuList>
        {menu.map(({ icon: Icon, label, path }, k) => (
          <MenuItem component={Link} key={k} to={path}>
            <ListItemIcon>
              <Icon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default Sidebar;

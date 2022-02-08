import React, { useMemo } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useSecurityStore } from '../../../modules/security/security.store';
import { UserRoles } from '../../../types/universal.types';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Paths } from '../../../types/global.types';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';


const Sidebar: React.VFC = () => {
  const currentUser = useSecurityStore((state) => state.currentUser);

  const menu = useMemo(() => {
    if (currentUser?.role === UserRoles.buyer) {
      return [
        { icon: AttachMoneyIcon, label: 'Deposit', path: Paths.buyerDeposit },
        { icon: FastfoodIcon, label: 'Products', path: Paths.buyerProducts },
        { icon: LogoutIcon, label: 'Logout', path: Paths.logout },
      ];
    }

    if (currentUser?.role === UserRoles.seller) {
      return [
        { icon: DashboardIcon, label: 'Dashboard', path: Paths.sellerDashboard },
        { icon: LogoutIcon, label: 'Logout', path: Paths.logout },
      ];
    }

    return [
      { icon: LogoutIcon, label: 'Logout', path: Paths.logout },
    ];
  }, [currentUser?.role]);

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

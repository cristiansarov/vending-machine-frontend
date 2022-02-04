import React, { useMemo } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';


export interface SidebarProps {

}

const Sidebar: React.VFC<SidebarProps> = () => {

  const menu = useMemo(() => [
    { icon: ContentCut, label: 'Text 1' },
    { icon: ContentCopy, label: 'Text 2' },
    { icon: ContentPaste, label: 'Text 3' },
  ], []);

  return (
    <Paper>
      <MenuList>
        {menu.map(({ icon: Icon, label }, k) => (
          <MenuItem key={k}>
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default Sidebar;

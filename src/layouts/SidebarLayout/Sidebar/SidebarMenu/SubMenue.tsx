import React, { useState } from 'react';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItemButton,
  Collapse
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { NavLink as RouterLink } from 'react-router-dom';
import SubMenuWrapper from './SidebarMenu.styled';
import FlexWrapper from 'src/components/FlexWrapper';

interface IListItem {
  label: string;
  link?: string;
  children?: Array<IListItem>;
  icon?: React.ReactNode;
}

interface ISubMenue {
  item: IListItem;
}

const SubMenue = ({ item }: ISubMenue) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <SubMenuWrapper width="90%">
      {item.children ? (
        <>
          <ListItemButton onClick={handleClick}>
            <Button
              disableRipple
              startIcon={item.icon}
              endIcon={open ? <ExpandLess /> : <ExpandMore />}
            >
              {item.label}
            </Button>
          </ListItemButton>
          {item.children && (
            <Collapse sx={{ pl: 1 }} in={open} timeout="auto" unmountOnExit>
              {item.children.map((child, index) => (
                <SubMenue item={child} key={index} />
              ))}
            </Collapse>
          )}
        </>
      ) : (
        <ListItemButton>
          <Button
            disableRipple
            component={RouterLink}
            to={item.link}
            startIcon={item.icon}
          >
            {item.label}
          </Button>
        </ListItemButton>
      )}
    </SubMenuWrapper>
  );
};

export default SubMenue;

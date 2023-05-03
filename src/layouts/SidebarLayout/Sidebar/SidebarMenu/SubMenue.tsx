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

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiListItemButton-root {
        padding: 1px 0;
        &:hover{
            background:inherit;
        }
        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
      }
    }
`
);
interface IListItem {
  subheader?: string;
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
    <SubMenuWrapper>
      <List
        subheader={
          <ListSubheader component="div" disableSticky>
            {item.subheader}
          </ListSubheader>
        }
      >
        {/* {item.link && ( */}
        <ListItemButton onClick={handleClick}>
          <Button
            disableRipple
            //   component={RouterLink}
            //   to={item.link}
            startIcon={item.icon}
          >
            {item.label}
          </Button>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {/* )} */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          {item.children.map((child, index) => (
            <List key={index} component="div" disablePadding>
              <ListItemButton sx={{ pl: 3 }}>
                <Button
                  disableRipple
                  component={RouterLink}
                  to={child.link}
                  startIcon={child.icon}
                >
                  {child.label}
                </Button>
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      </List>
    </SubMenuWrapper>
  );
};

export default SubMenue;

import { Box, styled } from '@mui/material';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import SubMenue from './SubMenue';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const menueItems = [
  {
    label: 'Dashboards',
    children: [
      {
        label: 'Cryptocurrency',
        link: '/dashboards/crypto',
        icon: <BrightnessLowTwoToneIcon />
      },
      {
        label: 'Messenger',
        link: '/dashboards/messenger',
        icon: <MmsTwoToneIcon />
      }
    ]
  },
  {
    label: 'TransactionList',
    icon: <MmsTwoToneIcon />,
    children: [
      {
        label: 'Transaction List',
        link: '/management/transactions',
        icon: <MmsTwoToneIcon />
      },
      {
        label: 'Profile',
        link: '/management/profile',
        icon: <MmsTwoToneIcon />,
        children: [
          {
            label: 'Profile detailes',
            link: '/management/profile/details',
            icon: <MmsTwoToneIcon />
          }
        ]
      }
    ]
  },
  {
    label: 'components',
    icon: <MmsTwoToneIcon />,
    children: [
      {
        label: 'buttons',
        link: '/components/buttons',
        icon: <MmsTwoToneIcon />
      },
      {
        label: 'modals',
        link: '/components/modals',
        icon: <MmsTwoToneIcon />
      },
      {
        label: 'accordions',
        link: '/components/accordions',
        icon: <MmsTwoToneIcon />
      },
      {
        label: 'tabs',
        link: '/components/tabs',
        icon: <MmsTwoToneIcon />
      },
      {
        label: 'badges',
        link: '/components/badges',
        icon: <MmsTwoToneIcon />
      },
      {
        label: 'avatars',
        link: '/components/avatars',
        icon: <MmsTwoToneIcon />
      },
      {
        label: 'cards',
        link: '/components/cards',
        icon: <MmsTwoToneIcon />
      },
      {
        label: 'forms',
        link: '/components/forms',
        icon: <MmsTwoToneIcon />
      }
    ]
  }
];

function SidebarMenu() {
  return (
    <>
      <MenuWrapper>
        {menueItems.map((item, index) => (
          <SubMenue item={item} key={index} />
        ))}
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;

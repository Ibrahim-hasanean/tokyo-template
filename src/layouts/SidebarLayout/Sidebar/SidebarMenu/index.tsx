import { Box, styled } from '@mui/material';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import SubMenue from './SubMenue';
import i18n from 'src/i18n';

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
    label: i18n.t('Dashboards'),
    children: [
      {
        label: i18n.t('Cryptocurrency'),
        link: '/dashboards/crypto',
        icon: <BrightnessLowTwoToneIcon />
      },
      {
        label: i18n.t('Messenger'),
        link: '/dashboards/messenger',
        icon: <MmsTwoToneIcon />
      }
    ]
  },
  {
    label: i18n.t('TransactionList'),
    icon: <MmsTwoToneIcon />,
    children: [
      {
        label: i18n.t('TransactionList'),
        link: '/management/transactions',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('Profile'),
        link: '/management/profile',
        icon: <MmsTwoToneIcon />,
        children: [
          {
            label: i18n.t('ProfileDetailes'),
            link: '/management/profile/details',
            icon: <MmsTwoToneIcon />
          }
        ]
      }
    ]
  },
  {
    label: i18n.t('components'),
    icon: <MmsTwoToneIcon />,
    children: [
      {
        label: i18n.t('buttons'),
        link: '/components/buttons',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('modals'),
        link: '/components/modals',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('accordions'),
        link: '/components/accordions',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('tabs'),
        link: '/components/tabs',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('badges'),
        link: '/components/badges',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('avatars'),
        link: '/components/avatars',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('cards'),
        link: '/components/cards',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('forms'),
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

import { Box, styled } from '@mui/material';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import SubMenue from './SubMenue';
import i18n from 'src/i18n';
import { PagesRoutes } from 'src/models/common';

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
        link: PagesRoutes.crypto.path,
        icon: <BrightnessLowTwoToneIcon />
      },
      {
        label: i18n.t('Messenger'),
        link: PagesRoutes.messenger.path,
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
        link: PagesRoutes.transactions.path,
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('Profile'),
        icon: <MmsTwoToneIcon />,
        children: [
          {
            label: i18n.t('ProfileDetailes'),
            link: PagesRoutes.details.path,
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
        link: PagesRoutes.buttons.path,
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('modals'),
        link: PagesRoutes.modals.path,
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('accordions'),
        link: PagesRoutes.accordions.path,
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('tabs'),
        link: PagesRoutes.tabs.path,
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('badges'),
        link: PagesRoutes.badges.path,
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('avatars'),
        link: PagesRoutes.avatars.path,
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('cards'),
        link: '/components/cards',
        icon: <MmsTwoToneIcon />
      },
      {
        label: i18n.t('forms'),
        link: PagesRoutes.forms.path,
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

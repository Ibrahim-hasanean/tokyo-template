import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import { PagesRoutes } from './models/common';
import ProtectRoute from './content/ProtectRoute';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const SignInPage = Loader(lazy(() => import('src/content/pages/Auth/SignIn')));

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <Navigate to="dashboards/crypto" />
  },
  {
    path: PagesRoutes.signIn.path,
    element: <SignInPage />
  },
  {
    path: PagesRoutes.dashboards.path,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: PagesRoutes.crypto.path,
        element: (
          <ProtectRoute permission={'dashboards.cryptocurrency'}>
            <Crypto />
          </ProtectRoute>
        )
      },
      {
        path: PagesRoutes.messenger.path,
        element: (
          <ProtectRoute permission={'dashboards.messenger'}>
            <Messenger />
          </ProtectRoute>
        )
      }
    ]
  },
  {
    path: PagesRoutes.management.path,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: PagesRoutes.transactions.path,
        element: (
          <ProtectRoute permission="transaction.transactionlist">
            <Transactions />
          </ProtectRoute>
        )
      },
      {
        path: PagesRoutes.profile.path,
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: PagesRoutes.details.path,
            element: (
              <ProtectRoute permission="transaction.profileDetailes">
                <UserProfile />
              </ProtectRoute>
            )
          },
          {
            path: PagesRoutes.settings.path,
            element: (
              <ProtectRoute permission="transaction.settings">
                <UserSettings />
              </ProtectRoute>
            )
          }
        ]
      }
    ]
  },
  {
    path: PagesRoutes.components.path,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: PagesRoutes.buttons.path,
        element: (
          <ProtectRoute>
            <Buttons />
          </ProtectRoute>
        )
      },
      {
        path: PagesRoutes.modals.path,
        element: <Modals />
      },
      {
        path: PagesRoutes.accordions.path,
        element: <Accordions />
      },
      {
        path: PagesRoutes.tabs.path,
        element: <Tabs />
      },
      {
        path: PagesRoutes.badges.path,
        element: <Badges />
      },
      {
        path: PagesRoutes.tooltips.path,
        element: <Tooltips />
      },
      {
        path: PagesRoutes.avatars.path,
        element: <Avatars />
      },
      {
        path: PagesRoutes.cards.path,
        element: <Cards />
      },
      {
        path: PagesRoutes.forms.path,
        element: <Forms />
      }
    ]
  }
];

export default routes;

import {
  createBrowserRouter,
} from 'react-router-dom';

import { GlobalLayout } from '@presentation/layouts';
import { Home } from '@presentation/pages';

export const routerClient = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  },
]);


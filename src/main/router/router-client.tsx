import {
  createBrowserRouter,
} from 'react-router-dom';

import { Home } from '@presentation/pages';

export const routerClient = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
]);


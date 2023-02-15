import {
  createBrowserRouter,
  RouterProvider as ReactRouterDomProvider,
} from 'react-router-dom';

import { Home } from '@presentation/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export function RouterProvider() {
  return (
    <ReactRouterDomProvider router={router} />
  )
}
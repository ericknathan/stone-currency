import { routerClient } from '@main/router/router-client';
import { RouterProvider as ReactRouterDomProvider } from 'react-router-dom';

export function RouterProvider() {
  return (
    <ReactRouterDomProvider router={routerClient} />
  )
}
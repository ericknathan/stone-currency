import { Outlet } from 'react-router-dom';

import { Header } from '@presentation/components';
import { GlobalLayoutWrapper } from './styles';

export function GlobalLayout() {
  return (
    <GlobalLayoutWrapper>
      <Header />
      <div>
        <Outlet />
      </div>
    </GlobalLayoutWrapper>
  )
}
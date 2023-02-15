import { StylesProvider } from './styles/provider';
import { CacheProvider, RouterProvider } from '@presentation/providers';

export function App() {
  return (
    <StylesProvider>
      <CacheProvider>
        <RouterProvider />
      </CacheProvider>
    </StylesProvider>
  );
}

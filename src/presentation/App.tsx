import { CacheProvider, RouterProvider, StylesProvider } from '@presentation/providers';

export function App() {
  return (
    <StylesProvider>
      <CacheProvider>
        <RouterProvider />
      </CacheProvider>
    </StylesProvider>
  );
}

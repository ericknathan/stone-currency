import { StylesProvider } from './styles/provider';
import { RouterProvider } from '@presentation/providers';

export function App() {
  return (
    <StylesProvider>
      <RouterProvider />
    </StylesProvider>
  );
}

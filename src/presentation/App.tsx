import { StylesProvider } from './styles/provider';
import { RouterProvider } from '@main/router/react-router-dom';

export function App() {
  return (
    <StylesProvider>
      <RouterProvider />
    </StylesProvider>
  );
}

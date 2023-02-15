import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './theme/default';
import { GlobalStyle } from './global';

interface StylesProviderProps {
  children: ReactNode;
}

export function StylesProvider({ children }: StylesProviderProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      {children}
    </ThemeProvider>
  )
}
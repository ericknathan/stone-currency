import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@presentation/styles/theme/default';
import { GlobalStyle } from '@presentation/styles/global';

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
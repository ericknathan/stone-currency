import { ReactElement } from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@presentation/styles/theme/default';

export function render(ui: ReactElement) {
  return testingLibraryRender(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>);
}

export const theme = defaultTheme;
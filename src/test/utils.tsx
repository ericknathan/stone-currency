import { ReactElement } from 'react';
import { render as testingLibraryRender } from '@testing-library/react';

import { defaultTheme } from '@presentation/styles/theme/default';
import { CacheProvider, StylesProvider } from '@presentation/providers';

export function render(ui: ReactElement) {
  return testingLibraryRender(
    <StylesProvider>
      <CacheProvider>
        {ui}
      </CacheProvider>
    </StylesProvider>
  );
}

export const theme = defaultTheme;
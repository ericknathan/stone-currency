import { ReactElement } from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import { UseQueryResult } from '@tanstack/react-query';

import { HttpResponse } from '@infra/http/http-client.helpers';

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

export function mockQuery(data: any, isLoading = false): UseQueryResult<HttpResponse<any>, unknown> {
  // @ts-ignore
  return {
    data,
    isLoading,
  }
}

export const theme = defaultTheme;
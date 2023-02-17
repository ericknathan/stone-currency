import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';

import 'jest-styled-components';

import * as queries from '@infra/cache/queries';
import { mockQuery, render } from '@test/utils';
import { Header } from '.';

describe("Header Component", () => {
  beforeAll(() => {
    vi.clearAllMocks();
  });

  it("should render a header with skeleton when data is not loaded", async () => {
    vi.spyOn(queries, 'useLastCurrencyQuotationQuery').mockImplementation(() => mockQuery(undefined, true));
    
    render(<Header />);

    expect(screen.getByTestId('skeleton')).toBeDefined();
  });
});
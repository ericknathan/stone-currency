import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';

import 'jest-styled-components';

import * as queries from '@infra/cache/queries';
import { mockQuery, render } from '@test/utils';
import { formatDate, formatTime } from '@main/utils';
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

  it("should render a header with correct info when data is loaded", async () => {
    vi.spyOn(queries, 'useLastCurrencyQuotationQuery').mockImplementation(() => mockQuery({
      requestTimestamp: new Date().getTime()
    }));
    
    render(<Header />);

    const requestTimestampDate = new Date(new Date().getTime());
    const formattedDate = formatDate(requestTimestampDate);
    const formattedTime = formatTime(requestTimestampDate);

    expect(screen.getByText(`${formattedDate} | ${formattedTime} UTC`)).toBeDefined();
  });
});
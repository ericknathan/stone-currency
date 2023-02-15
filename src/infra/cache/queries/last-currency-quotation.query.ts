import { useQuery } from '@tanstack/react-query';

import { FetchLastCurrencyQuotation, fetchLastCurrencyQuotation } from '@infra/http/requests';

export function useLastCurrencyQuotationQuery(payload?: FetchLastCurrencyQuotation.Payload) {
  return useQuery(
    ['last-currency-quotation'],
    () => fetchLastCurrencyQuotation({ ...payload }),
  )
}
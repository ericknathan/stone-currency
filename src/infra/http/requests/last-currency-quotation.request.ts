import { API_CONSTRAINTS, APP_CONSTRAINTS } from '@main/constraints';
import { ICurrency } from '@domain/interfaces';

import { currencyQuotationApi } from '@infra/http/http-client';
import { formatHttpResponse } from '@infra/http/http-client.helpers';

export namespace FetchLastCurrencyQuotation {
  export type Payload = {
    currencies?: string[];
  }
  
  export type Response = {
    [key: string]: ICurrency;
  }
}

const defaultCurrencies = [APP_CONSTRAINTS.DEFAULT_CURRENCY];

export async function fetchLastCurrencyQuotation({
  currencies = defaultCurrencies
}: FetchLastCurrencyQuotation.Payload) {
  const formattedCurrencies = currencies.join(',');

  const response = await currencyQuotationApi.get(
    `${API_CONSTRAINTS.ROUTES.GET_LAST_CURRENCY_QUOTATION}/${formattedCurrencies}`
  );
  
  return formatHttpResponse<FetchLastCurrencyQuotation.Response>(response);
}
import axios from 'axios';

export const currencyQuotationApi = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/'
});

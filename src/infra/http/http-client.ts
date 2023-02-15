import axios from 'axios';

export const currencyQuotationApi = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/'
});

currencyQuotationApi.interceptors.response.use(
  (response) => response,
  (error) =>  error.response
)
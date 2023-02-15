import { AxiosResponse } from 'axios';

export interface HttpResponse<ResponseType = any> {
  status: number;
  data: ResponseType;
  error?: string;
}

export function formatHttpResponse<ResponseType = any>(response: AxiosResponse): HttpResponse<ResponseType> {
  return {
    status: response.status,
    data: response.data.code ?? response.data,
    error: response.data.message,
  };
}
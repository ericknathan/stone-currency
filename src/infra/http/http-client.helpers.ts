import { AxiosResponse } from 'axios';

export interface HttpResponse<ResponseType = any> {
  status: number;
  response: ResponseType;
  error?: string;
  requestTimestamp: number;
}

export function formatHttpResponse<ResponseType = any>(response: AxiosResponse): HttpResponse<ResponseType> {
  return {
    status: response.status,
    response: response.data.code ?? response.data,
    error: response.data.message,
    requestTimestamp: new Date().getTime()
  };
}
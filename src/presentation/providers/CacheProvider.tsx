import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { cacheClient } from '@infra/cache/cache-client';

interface CacheProviderProps {
  children: ReactNode;
}

export function CacheProvider({ children }: CacheProviderProps) {
  return (
    <QueryClientProvider client={cacheClient}>
      {children}
    </QueryClientProvider>
  )
}
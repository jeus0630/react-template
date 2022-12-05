/* eslint-disable import/export */
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

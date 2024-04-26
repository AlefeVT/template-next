'use client';

import { Toaster as ToasterProvider } from 'react-hot-toast';

export const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: '#10b981',
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#10b981',
          },
        },
        error: {
          style: {
            background: '#ff4757',
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#ff4757',
          },
        },
      }}
    />
  );
};

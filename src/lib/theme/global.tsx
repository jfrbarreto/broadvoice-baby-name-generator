import React from 'react';
import { Global } from '@mantine/core';

export function GlobalStyle() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Poppins',
            fontStyle: 'normal'
          }
        },
        {
          '#root': { height: '100vh' }
        }
      ]}
    />
  );
}

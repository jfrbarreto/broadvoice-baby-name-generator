import React from 'react';

export interface Opts {
  fallback: React.ReactNode;
}
export type Unpromisify<T> = T extends Promise<infer P> ? P : never;

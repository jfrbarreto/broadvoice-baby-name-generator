import React, { lazy, Suspense } from "react";
import { Opts, Unpromisify } from "./lazy.types";
import { Anything } from "@types";

export const lazyLoad = <
  T extends Promise<Anything>,
  U extends React.ComponentType<Anything>
>(
  importFunc: () => T,
  // eslint-disable-next-line no-unused-vars
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null }
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = async () => {
      const module = await importFunc();
      return { default: selectorFunc(module as Unpromisify<T>) };
    };
  }

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>) => (
    <Suspense fallback={opts.fallback ? opts.fallback : null}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

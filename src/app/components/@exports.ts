import {lazyLoad} from "@helpers";

export const Composition = lazyLoad(
    () => import('./composition/composition.core'),
    (module) => module.CompositionCore
);

export const Typography = lazyLoad(
    () => import('./typography/typography.core'),
    (module) => module.TypographyCore
);

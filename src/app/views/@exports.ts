import { lazyLoad } from "@helpers";

export const Structure = lazyLoad(
  () => import("./structure/structure.core"),
  (module) => module.StructureCore
);

export const Generator = lazyLoad(
  () => import("./generator/generator.core"),
  (module) => module.GeneratorCore
);

import { useBaseStore } from "@stores";
import { useEffect } from "react";
import { rawNames } from "@mocks";

export function useGeneratorEffects() {
  const set_raw_names = useBaseStore((state) => state.set_raw_names);

  useEffect(() => {
    set_raw_names(rawNames);
  }, []);
}

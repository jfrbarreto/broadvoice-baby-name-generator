import { useBaseStore } from "@stores";
import { useEffect } from "react";
// import { rawNames } from "@mocks";
import { getRawNamesService } from "../../../lib/services/getRawNames.service";
import { NullableDoubleStringArray } from "@types";

export function useGeneratorEffects() {
  const set_raw_names = useBaseStore((state) => state.set_raw_names);

  useEffect(() => {
    getRawNamesService()
      .then((response) => {
        console.log(response.data);
        const resultArray = response.data.map(
          (name: NullableDoubleStringArray) => {
            return name?.splice(8, 7);
          }
        );
        return set_raw_names(resultArray);
      })
      .catch(console.error);
  }, []);
}

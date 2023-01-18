import { useBaseStore } from "@stores";
import {
  GenderIdentity,
  NullableDoubleStringArray,
  NullableString,
} from "@types";

export function useGenerator() {
  const raw_names = useBaseStore((state) => state.raw_names);

  const genderIdentityFilter = (gender: GenderIdentity) => {
    return raw_names?.filter(
      (name) => name[1] === gender
    ) as NullableDoubleStringArray;
  };

  const generate = () => {
    console.log();
  };
  return { generate };
}

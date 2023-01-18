import { useBaseStore } from "@stores";
import {
  GenderIdentity,
  NullableDoubleStringArray,
  NullableString,
  // NullableString,
} from "@types";

export function useGenerator() {
  const raw_names = useBaseStore((state) => state.raw_names);
  const year_filter = useBaseStore((state) => state.year_filter);
  const ethnicities_filter = useBaseStore((state) => state.ethnicities_filter);
  const filter_type = useBaseStore((state) => state.filter_type);

  const set_name_to_display = useBaseStore(
    (state) => state.set_name_to_display
  );

  const sortDoubleArray = (
    array: NullableDoubleStringArray,
    indexToSort: number
  ) => {
    const clonedArray = array?.slice();
    return clonedArray?.sort((a, b) => {
      let itemA;
      let itemB;
      if (isNaN(parseInt(a[indexToSort]))) {
        itemA = a[indexToSort];
        itemB = b[indexToSort];
      } else {
        itemA = parseInt(a[indexToSort], 10);
        itemB = parseInt(b[indexToSort], 10);
      }
      return itemB > itemA ? 1 : -1;
    }) as NullableDoubleStringArray;
  };

  const filterDoubleArray = (
    array: NullableDoubleStringArray,
    indexToFilter: number,
    stringToCompare: NullableString
  ) => {
    return array?.filter(
      (name) => name[indexToFilter] === stringToCompare
    ) as NullableDoubleStringArray;
  };

  const pickRandomItemFromDoubleArray = (array: NullableDoubleStringArray) => {
    return array?.[Math.floor(Math.random() * array?.length)];
  };

  const iterateRandomOnDoubleArray = (array: NullableDoubleStringArray) => {
    const l = array?.length as number;
    let barrier = 49;

    for (let i = 0; i < l; i++) {
      if (Math.random() * 100 > barrier) {
        console.log("barrier", i);
        barrier--;
      } else {
        return array?.[i];
      }
    }
  };

  // const iterateWeightedItemFromDoubleArray = (
  //   array: NullableDoubleStringArray
  // ) => {
  //   const l = array?.length as number;
  //   const initialValue = 0;
  //   const sum = array?.reduce(
  //     (accumulator, currentValue) =>
  //       accumulator + parseInt(currentValue[4], 10),
  //     initialValue
  //   ) as number;
  //   const occurenceBased = sortDoubleArray(raw_names, 4);
  //
  //   console.log(occurenceBased);
  //
  //   const avg = (sum / (sum * l)) * 1000;
  //
  //   console.log(avg);
  //
  //   for (let i = 0; i < l; i++) {
  //     const baseOccurrence =
  //       (parseInt(occurenceBased?.[i][4] as string, 10) / sum) * 1000;
  //
  //     const rankWeight =
  //       occurenceBased?.[i][5] === "1" ? baseOccurrence * 2 : baseOccurrence;
  //
  //     // console.log(Math.random() * (baseOccurrence + avg), rankWeight);
  //   }
  //
  //   console.log(l, sum);
  // };

  const generate = (gender: GenderIdentity) => {
    let resultArray = filterDoubleArray(raw_names, 1, gender);
    let nameToDisplay: string[] = [];

    if (year_filter && year_filter.length) {
      resultArray = filterDoubleArray(resultArray, 0, year_filter);
    }

    if (ethnicities_filter && ethnicities_filter.length) {
      resultArray = filterDoubleArray(resultArray, 2, ethnicities_filter);
    }

    // default

    switch (filter_type) {
      case "random":
        nameToDisplay = pickRandomItemFromDoubleArray(resultArray) as string[];
        break;
      case "iterate":
        nameToDisplay = iterateRandomOnDoubleArray(resultArray) as string[];
        break;
    }

    console.info(nameToDisplay);
    set_name_to_display(nameToDisplay);
  };
  return { generate };
}

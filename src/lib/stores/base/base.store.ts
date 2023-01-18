import create from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";
import {
  BaseStoreState,
  BaseStoreActions,
  BaseStore,
  FilterType,
} from "./base.types";
import { Anything, GenderIdentity, NullableDoubleStringArray } from "@types";
import { removeDuplicatesArray } from "../../helpers/removeDuplicatesArray/removeDuplicatesArray.logic";

const initialState: BaseStoreState = {
  raw_names: null,
  gender_identity: null,
  name_to_display: [],
  available_ethnicities: [],
  available_years: [],
  year_filter: null,
  ethnicities_filter: null,
  filter_type: "random",
};

const actions = (set: Anything): BaseStoreActions => {
  const set_raw_names = (n: NullableDoubleStringArray) =>
    set(
      produce((state: BaseStoreState) => {
        const normalizedRaw = n?.map((name) => {
          return name.map((value) => value.toLowerCase());
        }) as NullableDoubleStringArray;

        state.raw_names = normalizedRaw;
        state.available_years =
          removeDuplicatesArray(
            normalizedRaw?.map((name) => name[0])
          )?.sort() || [];
        state.available_ethnicities =
          removeDuplicatesArray(
            normalizedRaw?.map((name) => name[2])
          )?.sort() || [];
      }),
      false,
      "set_raw_names"
    );

  const set_gender_identity = (n: GenderIdentity) =>
    set(
      produce((state: BaseStoreState) => {
        state.gender_identity = n;
      }),
      false,
      "set_gender_identity"
    );

  const set_name_to_display = (s: string[]) =>
    set(
      produce((state: BaseStoreState) => {
        state.name_to_display = s;
      }),
      false,
      "set_name_to_display"
    );

  const set_year_filter = (s: string) =>
    set(
      produce((state: BaseStoreState) => {
        state.year_filter = s;
      }),
      false,
      "set_year_filter"
    );

  const set_ethnicity_filter = (s: string) =>
    set(
      produce((state: BaseStoreState) => {
        state.ethnicities_filter = s;
      }),
      false,
      "set_ethnicity_filter"
    );

  const set_filter_type = (s: FilterType) =>
    set(
      produce((state: BaseStoreState) => {
        state.filter_type = s;
      }),
      false,
      "set_filter_type"
    );

  return {
    set_raw_names,
    set_year_filter,
    set_filter_type,
    set_ethnicity_filter,
    set_gender_identity,
    set_name_to_display,
  };
};

export const useBaseStore = create<BaseStore>()(
  devtools(
    (set) => ({
      ...initialState,
      ...actions(set),
    }),
    {
      name: "GENERATOR.STORE",
    }
  )
);

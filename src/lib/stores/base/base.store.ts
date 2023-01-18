import create from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";
import { BaseStoreState, BaseStoreActions, BaseStore } from "./base.types";
import {
  Anything,
  GenderIdentity,
  NullableDoubleStringArray,
  NullableString,
} from "@types";

const initialState: BaseStoreState = {
  raw_names: null,
  gender_identity: null,
  name_to_display: null,
};

const actions = (set: Anything): BaseStoreActions => {
  const set_raw_names = (n: NullableDoubleStringArray) =>
    set(
      produce((state: BaseStoreState) => {
        state.raw_names = n;
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

  const set_name_to_display = (s: NullableString) =>
    set(
      produce((state: BaseStoreState) => {
        state.name_to_display = s;
      }),
      false,
      "set_name_to_display"
    );

  return {
    set_raw_names,
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

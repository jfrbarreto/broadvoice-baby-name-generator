import {
  GenderIdentity,
  NullableDoubleStringArray,
  NullableString,
} from "@types";

export interface BaseStoreState {
  raw_names: NullableDoubleStringArray;
  gender_identity: GenderIdentity | null;
  name_to_display: NullableString;
}
export interface BaseStoreActions {
  set_raw_names(n: NullableDoubleStringArray): void;
  set_gender_identity(g: GenderIdentity | null): void;
  set_name_to_display(s: NullableString): void;
}
export type BaseStore = BaseStoreState & BaseStoreActions;

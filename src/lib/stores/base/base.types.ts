import { GenderIdentity, NullableDoubleStringArray } from "@types";

export type FilterType = "random" | "iterate" | "w-iterate";

export interface BaseStoreState {
  raw_names: NullableDoubleStringArray;
  available_years: string[];
  year_filter: string | null;
  available_ethnicities: string[];
  ethnicities_filter: string | null;
  gender_identity: GenderIdentity | null;
  name_to_display: string[];
  filter_type: FilterType;
}
export interface BaseStoreActions {
  set_raw_names(n: NullableDoubleStringArray): void;
  set_year_filter(s: string): void;
  set_ethnicity_filter(s: string): void;
  set_gender_identity(g: GenderIdentity | null): void;
  set_name_to_display(s: string[]): void;
  set_filter_type(f: FilterType): void;
}
export type BaseStore = BaseStoreState & BaseStoreActions;

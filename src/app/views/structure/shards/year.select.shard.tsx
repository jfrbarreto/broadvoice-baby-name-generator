import { Select, Space } from "@mantine/core";
import React from "react";
import { Composition, Typography } from "@components";
import { useBaseStore } from "@stores";

export function YearSelectShard() {
  const available_years = useBaseStore((state) => state.available_years);
  const set_year_filter = useBaseStore((state) => state.set_year_filter);
  const year_filter = useBaseStore((state) => state.year_filter);
  return (
    <Composition row aCenter>
      <Typography weight={500} size={14}>
        [ year filter ]
      </Typography>
      <Space w={8} />
      <Select
        clearable
        data={available_years.map((year) => {
          return { value: year, label: year };
        })}
        value={year_filter}
        onChange={set_year_filter}
      />
    </Composition>
  );
}

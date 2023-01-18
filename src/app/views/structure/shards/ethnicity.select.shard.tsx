import { Select, Space } from "@mantine/core";
import React from "react";
import { Composition, Typography } from "@components";
import { useBaseStore } from "@stores";

export function EthnicitySelectShard() {
  const available_ethnicities = useBaseStore(
    (state) => state.available_ethnicities
  );
  const set_ethnicity_filter = useBaseStore(
    (state) => state.set_ethnicity_filter
  );
  const ethnicities_filter = useBaseStore((state) => state.ethnicities_filter);
  return (
    <Composition row aCenter>
      <Typography weight={500} size={14}>
        [ etnicity filter ]
      </Typography>
      <Space w={8} />
      <Select
        clearable
        data={available_ethnicities.map((ethnicity) => {
          return { value: ethnicity, label: ethnicity };
        })}
        value={ethnicities_filter}
        onChange={set_ethnicity_filter}
      />
    </Composition>
  );
}

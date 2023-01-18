import { Radio, Space } from "@mantine/core";
import React from "react";
import { Composition, Typography } from "@components";
import { useBaseStore } from "@stores";

export function PickRadioShard() {
  const filter_type = useBaseStore((state) => state.filter_type);
  const set_filter_type = useBaseStore((state) => state.set_filter_type);
  return (
    <Composition row aCenter fullHeight>
      <Typography weight={500} size={14}>
        [ pick method ]
      </Typography>
      <Space w={16} />
      <Radio.Group
        value={filter_type}
        onChange={set_filter_type}
        name="pickMethod"
      >
        <Radio value="random" label="random" />
        <Radio value="iterate" label="iterate" />
        <Radio value="w-iterate" label="w-iterate" />
      </Radio.Group>
    </Composition>
  );
}

import { Header, Space } from "@mantine/core";
import { Composition, Typography } from "@components";
import React from "react";
import { YearSelectShard } from "./year.select.shard";
import { EthnicitySelectShard } from "./ethnicity.select.shard";
import { PickRadioShard } from "./pick.radio.shard";

export function HeaderShard() {
  return (
    <Header height={70} px={16}>
      <Composition row grow fullHeight aCenter>
        <Typography weight={800} size={36}>
          Baby Name Gen
        </Typography>
        <Space w={32} />
        <YearSelectShard />
        <Space w={32} />
        <EthnicitySelectShard />
        <Composition row grow />
        <PickRadioShard />
      </Composition>
    </Header>
  );
}

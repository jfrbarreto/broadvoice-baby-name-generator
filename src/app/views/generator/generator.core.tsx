import { Structure } from "@views";
import React from "react";
import { Composition } from "@components";
import { Space } from "@mantine/core";
import { GenderButtonShard } from "./shards/gender.button.shard";
import { NameCardShard } from "./shards/name.card.shard";
import { useGeneratorEffects } from "./generator.effects";
import { YearTypographyShard } from "./shards/year.typography.shard";
import { EthnicityTypographyShard } from "./shards/ethnicity.typography.shard";

export function GeneratorCore() {
  useGeneratorEffects();
  return (
    <Structure>
      <Composition column fullHeight fixedWidth={500} aCenter>
        <Space h={128} />
        <NameCardShard />
        <Composition row>
          <YearTypographyShard />
          <Space w={8} />
          <EthnicityTypographyShard />
        </Composition>

        <Space h={128} />
        <Composition row jBetween fullWidth>
          <GenderButtonShard type={"female"} />
          <Space w={32} />
          <GenderButtonShard type={"male"} />
        </Composition>
      </Composition>
    </Structure>
  );
}

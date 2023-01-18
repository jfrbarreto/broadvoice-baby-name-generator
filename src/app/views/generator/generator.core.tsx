import { Structure } from "@views";
import React from "react";
import { Composition } from "@components";
import { Space } from "@mantine/core";
import { GenderButtonShard } from "./shards/gender.button.shard";
import { NameCardShard } from "./shards/name.card.shard";
import { useGeneratorEffects } from "./generator.effects";

export function GeneratorCore() {
  useGeneratorEffects();
  return (
    <Structure>
      <Composition column fullHeight fixedWidth={500} aCenter>
        <Space h={128} />
        <NameCardShard />
        <Space h={128} />
        <Composition row jBetween fullWidth>
          <GenderButtonShard type={"FEMALE"} />
          <Space w={32} />
          <GenderButtonShard type={"MALE"} />
        </Composition>
      </Composition>
    </Structure>
  );
}

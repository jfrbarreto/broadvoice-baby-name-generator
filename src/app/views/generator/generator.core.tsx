import { Structure } from "@views";
import React from "react";
import { Composition } from "@components";
import { Button, Space } from "@mantine/core";
import { GenderButtonShard } from "./shards/gender.button.shard";
import { NameCardShard } from "./shards/name.card.shard";
import { useGeneratorEffects } from "./generator.effects";
import { YearTypographyShard } from "./shards/year.typography.shard";
import { EthnicityTypographyShard } from "./shards/ethnicity.typography.shard";
import { useGenerator } from "../../../lib/hooks/generator/generator.hook";

export function GeneratorCore() {
  useGeneratorEffects();
  const { generate } = useGenerator();

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
        <Button
          style={{ textTransform: "capitalize" }}
          variant="outline"
          fullWidth
          size="xl"
          mt="md"
          radius="md"
          onClick={() => generate()}
        >
          New Generate
        </Button>
      </Composition>
    </Structure>
  );
}

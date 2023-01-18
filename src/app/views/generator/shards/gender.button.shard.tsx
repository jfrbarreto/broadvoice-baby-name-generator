import { Button } from "@mantine/core";
import React from "react";
import { GenderButtonProps } from "../generator.types";
// import { useBaseStore } from "@stores";
import { useGenerator } from "../../../../lib/hooks/generator/generator.hook";

export function GenderButtonShard({ type }: GenderButtonProps) {
  // const set_gender_identity = useBaseStore(
  //   (state) => state.set_gender_identity
  // );
  const { generate } = useGenerator();
  const handleSetGenderIdentity = () => generate(type);
  const color = type === "FEMALE" ? "pink" : "blue";

  return (
    <>
      {type && (
        <Button
          style={{ textTransform: "capitalize" }}
          variant="outline"
          color={color}
          fullWidth
          size="xl"
          mt="md"
          radius="md"
          onClick={handleSetGenderIdentity}
        >
          {type.toLowerCase()}
        </Button>
      )}
    </>
  );
}

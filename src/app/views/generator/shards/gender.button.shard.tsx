import { Button } from "@mantine/core";
import React from "react";
import { GenderButtonProps } from "../generator.types";
// import { useGenerator } from "../../../../lib/hooks/generator/generator.hook";
import { useBaseStore } from "@stores";

export function GenderButtonShard({ type }: GenderButtonProps) {
  // const { generate } = useGenerator();

  const set_gender_identity = useBaseStore(
    (state) => state.set_gender_identity
  );

  const handleSetGenderIdentity = () => {
    set_gender_identity(type);
  };

  const color = type === "female" ? "pink" : "blue";

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

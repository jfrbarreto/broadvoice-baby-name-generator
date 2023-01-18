import { Button } from "@mantine/core";
import React from "react";
import { GenderButtonProps } from "../generator.types";
import { useGenerator } from "../../../../lib/hooks/generator/generator.hook";

export function GenderButtonShard({ type }: GenderButtonProps) {
  const { generate } = useGenerator();
  const handleSetGenderIdentity = () => generate(type);
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

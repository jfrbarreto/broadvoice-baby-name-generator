import { Card, Space } from "@mantine/core";
import React from "react";
import { Typography } from "@components";
import { useBaseStore } from "@stores";

export function NameCardShard() {
  const name = useBaseStore((state) => state.name_to_display?.[3]);

  const capitalizedName = name && name.toLowerCase();

  return (
    <>
      <Card shadow="md" p="lg" radius="md" withBorder>
        <Typography weight={500} size={32} capitalizeFirst>
          {capitalizedName || "Found no Names!"}
        </Typography>
      </Card>
      <Space h={16} />
    </>
  );
}

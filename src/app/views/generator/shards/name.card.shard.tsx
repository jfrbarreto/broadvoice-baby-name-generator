import { Card } from "@mantine/core";
import React from "react";
import { Typography } from "@components";

export function NameCardShard() {
  return (
    <Card shadow="md" p="lg" radius="md" withBorder>
      <Typography weight={500} size={32}>
        Name
      </Typography>
    </Card>
  );
}

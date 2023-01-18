import React from "react";
import { AppShell } from "@mantine/core";
import { StructureProps } from "./structure.types";
import { HeaderShard } from "./shards/header.shard";

export function StructureCore({ children }: StructureProps) {
  return (
    <>
      <AppShell header={<HeaderShard />}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {children}
        </div>
      </AppShell>
    </>
  );
}

import { useBaseStore } from "@stores";
import { Typography } from "@components";
import React from "react";

export function YearTypographyShard() {
  const year = useBaseStore((state) => state.name_to_display?.[0]);

  return (
    <>
      {year && (
        <Typography weight={300} size={14} capitalizeFirst>
          {`[year] ${year}`}
        </Typography>
      )}
    </>
  );
}

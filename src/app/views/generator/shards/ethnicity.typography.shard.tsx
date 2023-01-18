import { useBaseStore } from "@stores";
import { Typography } from "@components";
import React from "react";

export function EthnicityTypographyShard() {
  const ethnicity = useBaseStore((state) => state.name_to_display?.[2]);

  return (
    <>
      {ethnicity && (
        <Typography weight={300} size={14} capitalizeFirst>
          {`[ethnicity] ${ethnicity}`}
        </Typography>
      )}
    </>
  );
}

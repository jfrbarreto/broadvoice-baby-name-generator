import { Header } from "@mantine/core";
import { Composition, Typography } from "@components";
import React from "react";

export function HeaderShard() {
  return (
    <Header height={70} px={16}>
      <Composition row grow fullHeight aCenter>
        <Typography weight={800} size={36}>
          Baby Name Gen
        </Typography>
      </Composition>
    </Header>
  );
}

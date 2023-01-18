import React, { useMemo } from "react";
import { Box } from "@mantine/core";
import { TypographyProps } from "./typography.types";
import { useTypographyStyles } from "./typography.styles";

export function TypographyCore(props: TypographyProps) {
  const {
    children,
    grey,
    color,
    weight,
    size,
    family,
    line,
    spacing,
    span,
    upper,
    capitalizeAll,
    capitalizeFirst,
    align,
    onClick,
  } = props;
  const { classes } = useTypographyStyles({
    grey,
    color,
    weight,
    size,
    family,
    line,
    spacing,
    span,
    upper,
    capitalizeAll,
    capitalizeFirst,
    align,
    onClick,
    children,
  });

  const text = useMemo(() => {
    if (capitalizeFirst && children)
      return (
        children.charAt(0).toUpperCase() +
        children.substring(1, children.length)
      );
    return children;
  }, [children]);

  return (
    <Box
      component={span ? "span" : "div"}
      onClick={onClick}
      className={classes.typography}
    >
      {text}
    </Box>
  );
}

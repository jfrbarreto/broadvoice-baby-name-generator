import React from 'react';
import { CompositionProps } from './composition.types';
import { useCompositionStyles } from './composition.styles';

export function CompositionCore(props: CompositionProps) {
  const {
    row,
    column,
    grow,
    display,
    fullHeight,
    fullWidth,
    jCenter,
    jEnd,
    jBetween,
    jEvenly,
    jAround,
    aCenter,
    aEnd,
    relative,
    absolute,
    padding,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    fixedHeight,
    fixedWidth,
    wrap,
    pointer,
    onClick,
    debug,
    children
  } = props;
  const { classes } = useCompositionStyles({
    row,
    column,
    display,
    grow,
    fullHeight,
    fullWidth,
    jCenter,
    jEnd,
    jBetween,
    jEvenly,
    jAround,
    aCenter,
    aEnd,
    relative,
    absolute,
    padding,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    fixedHeight,
    fixedWidth,
    wrap,
    pointer,
    onClick,
    debug
  });
  return (
    <div onClick={onClick || undefined} className={classes.structure}>
      {children}
    </div>
  );
}

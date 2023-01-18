import { createStyles } from '@mantine/core';
import { useMemo } from 'react';
import { CompositionStyles } from './composition.types';

export const useCompositionStyles = createStyles(
  (
    _theme,
    {
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
    }: CompositionStyles
  ) => {
    const position = useMemo(() => {
      if (relative) return 'relative';
      if (absolute) return 'absolute';
      return 'initial';
    }, [relative, absolute]);

    const justifyContent = useMemo(() => {
      if (jCenter) return 'center';
      if (jEnd) return 'flex-end';
      if (jBetween) return 'space-between';
      if (jEvenly) return 'space-evenly';
      if (jAround) return 'space-around';
      return 'flex-start';
    }, [jCenter, jEnd, jBetween, jEvenly, jAround]);

    const alignItems = useMemo(() => {
      if (aCenter) return 'center';
      if (aEnd) return 'flex-end';
      return 'flex-start';
    }, [aCenter, aEnd]);

    return {
      structure: {
        display: display === undefined || display ? 'flex' : 'none',
        flexDirection: (row === undefined && column === undefined) || row ? 'row' : 'column',
        flexGrow: grow ? 1 : 0,
        flexWrap: wrap ? 'wrap' : 'initial',
        height: fixedHeight || (fullHeight ? '100%' : 'auto'),
        width: fixedWidth || (fullWidth ? '100%' : 'auto'),
        cursor: pointer || onClick ? 'pointer' : 'default',
        border: debug ? `1px solid #${Math.floor(Math.random() * 16777215).toString(16)}` : 'none',
        position,
        justifyContent,
        alignItems,
        padding,
        maxHeight,
        maxWidth,
        minWidth,
        minHeight
      }
    };
  }
);

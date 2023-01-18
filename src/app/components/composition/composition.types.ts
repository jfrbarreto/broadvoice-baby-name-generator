import { ReactNode } from 'react';

export interface CompositionProps {
  row?: boolean;
  column?: boolean;
  display?: boolean;
  grow?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
  jCenter?: boolean;
  jEnd?: boolean;
  jBetween?: boolean;
  jAround?: boolean;
  jEvenly?: boolean;
  aCenter?: boolean;
  aEnd?: boolean;
  relative?: boolean;
  absolute?: boolean;
  padding?: string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  fixedHeight?: number | string;
  fixedWidth?: number | string;
  wrap?: boolean;
  pointer?: boolean;
  onClick?(): void;
  debug?: boolean;
  children?: ReactNode;
}

export type CompositionStyles = CompositionProps;

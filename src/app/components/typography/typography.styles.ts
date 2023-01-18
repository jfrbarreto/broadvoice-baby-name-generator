import { createStyles } from '@mantine/core';
import { TypographyProps } from './typography.types';

export const useTypographyStyles = createStyles(
  (
    theme,
    { grey, color, weight, size, family, line, spacing, upper, capitalizeAll, align, onClick }: TypographyProps
  ) => {
    return {
      typography: {
        fontFamily: family || 'Poppins',
        lineHeight: line || 1,
        color: color || (grey && theme.other.textColor[grey]),
        fontWeight: weight,
        fontSize: size,
        textAlign: align || 'left',
        cursor: onClick ? 'pointer' : 'inherit',
        letterSpacing: spacing || 'normal',
        textTransform: upper ? 'uppercase' : capitalizeAll ? 'capitalize' : 'unset'
      }
    };
  }
);

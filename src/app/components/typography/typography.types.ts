type ColorLevels = 'lightest' | 'lighter' | 'light' | 'medium' | 'dark' | 'darker' | 'darkest';

type WeightLevels = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface TypographyProps {
  grey?: ColorLevels;
  color?: string;
  weight: WeightLevels;
  size: number;
  family?: 'Montserrat' | 'Oswald';
  line?: number;
  spacing?: number;
  span?: boolean;
  onClick?(): void;
  upper?: boolean;
  capitalizeAll?: boolean;
  capitalizeFirst?: boolean;
  align?: 'left' | 'right' | 'justify';
  children: string;
}

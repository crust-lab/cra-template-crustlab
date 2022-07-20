import { DefaultTheme } from 'styled-components';

type Theme = {
  theme: DefaultTheme;
};

type SpacingType = keyof DefaultTheme['spacing'];
type ColorType = keyof DefaultTheme['colors'];

export const getSpacing =
  (spacingLabel: SpacingType) =>
  ({ theme: { spacing } }: Theme) =>
    spacing[spacingLabel];

export const getColor =
  (colorLabel: ColorType) =>
  ({ theme: { colors } }: Theme) =>
    colors[colorLabel];

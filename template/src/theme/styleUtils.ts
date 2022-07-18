import { DefaultTheme } from 'styled-components';

type Theme = {
  theme: DefaultTheme;
};

type SpacingType = keyof DefaultTheme['spacing'];

export const getSpacing =
  (spacingLabel: SpacingType) =>
  ({ theme: { spacing } }: Theme) =>
    spacing[spacingLabel];

import { DefaultTheme } from 'styled-components';

type Theme = {
  theme: DefaultTheme;
};

type SpacingType = keyof DefaultTheme['spacing'];
type ColorType = keyof DefaultTheme['colors'];
type BreakpointsType = keyof DefaultTheme['breakpoints'];

export const getSpacing =
  (spacingLabel: SpacingType) =>
  ({ theme: { spacing } }: Theme) =>
    spacing[spacingLabel];

export const getColor =
  (colorLabel: ColorType) =>
  ({ theme: { colors } }: Theme) =>
    colors[colorLabel];

export const getBreakpoint =
  (breakpointLabel: BreakpointsType) =>
  ({ theme: { breakpoints } }: Theme) =>
    breakpoints[breakpointLabel];

export const getMediaQueryBreakpoint =
  (breakpointLabel: BreakpointsType) =>
  ({ theme: { breakpoints } }: Theme) =>
    `(min-width: ${breakpoints[breakpointLabel]}px)`;

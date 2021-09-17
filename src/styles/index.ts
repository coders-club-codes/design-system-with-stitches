import { createStitches, ScaleValue } from '@stitches/react';

const convertToRem = (value: number) => `${value / 16}rem`;

const space = {
  4: convertToRem(4),
  8: convertToRem(8),
  12: convertToRem(12),
  16: convertToRem(16),
  20: convertToRem(20),
  24: convertToRem(24),
  28: convertToRem(28),
  32: convertToRem(32),
  36: convertToRem(36),
  40: convertToRem(40),
};

export const { styled: codersStyled, createTheme } = createStitches({
  prefix: 'codersclub',
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',

      gray900: '#090909',
      gray800: '#181818',
      gray700: '#333333',

      'coders-red': '#ff2748',

      background: '#090909',
      shape: '#181818',

      'text-default': '#ffffff',
      'text-highlight': '#ff2748',

      'button-primary-bg': '#ff2748',
      'button-primary-text': '#ffffff',
      'button-secondary-bg': 'transparent',
      'button-secondary-text': '#ffffff',
    },
    radii: {
      default: '0px',
      pill: '999999px',
    },
    space,
    sizes: space,
  },
  utils: {
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const lightTheme = createTheme({
  colors: {
    'button-primary-bg': '#181818',
  },
});

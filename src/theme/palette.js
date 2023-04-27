// SETUP COLORS

import { alpha, darken, lighten, rgbToHex } from '../utils/colorManipulate'

const GREY = {
  0: '#FFFFFF',
  100: '#FAFAFA', // White
  200: '#F2F2F2',
  300: '#D9D9D9', // Light Grey
  400: '#BFBFBF',
  500: '#8C8C8C',
  600: '#666666',
  700: '#404040', // Dark Grey
  800: '#262626',
  900: '#000000', // Black
}

const getColorPalette = (mainColor, contrastText) => ({
  lighter: rgbToHex(lighten(mainColor, 0.4)).toUpperCase(),
  light: rgbToHex(lighten(mainColor, 0.2)).toUpperCase(),
  main: mainColor,
  dark: rgbToHex(darken(mainColor, 0.2)).toUpperCase(),
  darker: rgbToHex(darken(mainColor, 0.4)).toUpperCase(),
  contrastText,
})

const PRIMARY = getColorPalette('#FEFF88', GREY[700])
const SECONDARY = getColorPalette('#4BFCFF', GREY[100])
const INFO = getColorPalette('#80CEFF', GREY[100])
const SUCCESS = getColorPalette('#92FF9B', GREY[100])
const WARNING = getColorPalette('#FFD57C', GREY[700])
const ERROR = getColorPalette('#FFAD98', GREY[100])
const FEATURE = getColorPalette('#E2B2FF', GREY[100])

const COMMON = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  feature: FEATURE,
  grey: GREY,
  divider: INFO.main,
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
}

export default function palette(themeMode) {
  // 'light' | 'dark'
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: INFO.main,
      secondary: alpha(INFO.main, 0.8),
      disabled: alpha(INFO.main, 0.4),
    },
    background: { paper: GREY[0], default: GREY[100], neutral: GREY[300] },
    action: {
      ...COMMON.action,
      active: INFO.main,
    },
  }

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: GREY[100],
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  }

  return themeMode === 'light' ? light : dark
}

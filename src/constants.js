export const BREAKPOINTS = {
  laptopMax: 81.25,
  tabletMax: 59.375,
  phoneMax: 37.5,
}

export const QUERIES = {
  laptopAndLess: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
  tabletAndLess: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  phoneAndLess: `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
}

export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
}

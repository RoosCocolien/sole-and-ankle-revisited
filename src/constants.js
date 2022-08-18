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

const breakpoints = {
  tablet: 768,
  desktop: 992,
};

export const getBreakpoints = {
  query: {
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
  },
  values: {
    tablet: breakpoints.tablet,
    desktop: breakpoints.desktop,
  },
};

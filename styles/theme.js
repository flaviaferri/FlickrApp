const breakpoints = [576, 768, 992, 1200];

export const theme = {
  colors: {
    white: "#FFF",
    black: "#1F2933",
  },

  breakpoints: breakpoints.map((bp) => `@media (max-width: ${bp}px)`),
};

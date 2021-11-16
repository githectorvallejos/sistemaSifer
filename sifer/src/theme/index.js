import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  overrides: {},

  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1600,
    },
  },
  typography: {},
  palette: {
    primary: {
      main: "#417351",
    },
    secondary: {
      main: "#FFCE76",
    },
    backgroundBlack: {
      main: "#5F5C5E",
    },
    success: {
      main: "#1C8269",
    },
    error: {
      main: "#D1001F",
    },
    tonalOffset: 0.2,
  },
  paletteCustom: {
    backgroundBlack: {
      main: "#5F5C5E",
    },
  },
});

export default Theme;

// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#091524", // Primary color
    },
    secondary: {
      main: "#287BCA", // Secondary color
    },
    gray: {
      main: "#FBFBFB",
    },
    text: {
      main: "#C0C0C0",
      white: "#fff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    // Customize other typography elements
  },
  spacing: 8, // Default spacing unit
  // Add other customizations like shape, zIndex, breakpoints, etc.
});

export default theme;

// 1. Import the extendTheme function
import { extendTheme, theme as base } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc

export const HDRTheme = extendTheme({
  colors: {
    primary: "#F0DC5B",
    secundary: "#A69C5D",
    warning: "#f55aaa",
  },
  fonts: {
    heading: `Inter, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
    logo: "Poppins",
    primary: "Arial",
  },
});

import defaultColors from "../util/default-colors.json"
import darkColors from "../util/dark-theme-colors.json"
import { lightness } from "@theme-ui/color"
const theme = {
  colors: {
    ...defaultColors,
    text: "#000C75",
    background: "linear-gradient( #051937, #004d7a, #008793, #00bf72, #a8eb12)",
    primary: "#000C75",
    accent: "#000C75",
    muted: "rgba(0, 0, 0, 0.7)",
    cardBg: "#fff",
    borderColor: "#540229",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons: "#0F80E8",
    socialIconsHover: "#8000FF",
    buttonColor: "#ffffff",
    buttonHoverBg: "#000C75",
    buttonHoverColor: lightness("siteColor", 0.8),
    modes: {
      dark: {
        text: "#f5f5f5",
        background: "#111",
        primary: "#0F80E8",
        accent: "#f5f5f5",
        muted: "rgba(255, 255, 255, 0.7)",
        cardBg: "#252525",
        borderColor: "#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons: lightness("siteColor", 0.5),
        socialIconsHover: lightness("siteColor", 0.9),
        buttonColor: lightness("siteColor", 0.7),
        buttonHoverBg: lightness("siteColor", 0.3),
        buttonHoverColor: lightness("siteColor", 0.9),
        ...darkColors,
      },
    },
  },
  links: {
    postLink: {
      color: "muted",
      "&:hover": {
        color: "socialIconsHover",
      },
    },
  },
  variants: {
    button: {
      bg: "buttonHoverBg",
      color: "buttonColor",
      "&:hover": {
        bg: "buttonHoverBg",
        color: "buttonHoverColor",
      },
    },
    socialIcons: {
      a: {
        color: "socialIcons",
        ":hover": {
          color: "socialIconsHover",
        },
      },
    },
  },
}

export default theme

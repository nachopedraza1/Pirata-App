import { createTheme } from "@mui/material";

export const PirataTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `@font-face {font-family: Poppins;src: url(../src/assets/Fonts/Poppins-SemiBold.ttf)}`,
        },
    },
    palette: {
        primary: {
            main: "#2192FF",
        },
        secondary: {
            main: "#393E46"
        },
        tertiary: {
            main: "#ffffff"
        },
        background: {
            main: "black"
        }
    },
    typography: {
        fontFamily: "Poppins",
    },
});

import { createTheme } from "@mui/material";

export const PirataTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `@font-face {font-family: Poppins;src: url(../src/assets/Fonts/Poppins-SemiBold.ttf)}`,
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: "white",
                    "&.MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "white"
                        }, '&:hover fieldset': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: "#2192FF",
                        },
                    },
                },
                notchedOutline: {
                    borderColor: "white",
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "white",
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: "white",
                }
            }
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
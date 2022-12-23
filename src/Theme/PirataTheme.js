
import { createTheme } from "@mui/material";

export const PirataTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {font-family: Poppins;src: url(/assets/Fonts/Poppins-SemiBold.ttf)}
            @font-face {font-family: Poppins-reg;src: url(/assets/Fonts/Poppins-Regular.ttf)}
            @font-face {font-family: Aldrich;src: url(/assets/Fonts/Aldrich-Regular.ttf)}
            @font-face {font-family: Oswald;src: url(/assets/Fonts/oswald.bold.ttf)}`,
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: "gray",
                    "&.MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "gray"
                        }, '&:hover fieldset': {
                            borderColor: 'gray',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: "#2192FF",
                        },
                    },
                },
                notchedOutline: {
                    borderColor: "gray",
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "gray",
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: "gray",
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }
            }
        }
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
        },
        backgraunds: {
            main: "#1f2024",
            secondary: "#292c31",
            black: "#16171b",
        },
    },
    typography: {
        fontFamily: ["Aldrich", "Poppins-reg", "Oswald", "Poppins",]
    },
});
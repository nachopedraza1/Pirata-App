
import { createTheme, drawerClasses } from "@mui/material";

export const PirataTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {font-family: Poppins;src: url(''https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'}
            @font-face {font-family: Aldrich ;src: url('https://fonts.googleapis.com/css2?family=Aldrich&display=swap')}
            @font-face {font-family: Oswald;src: url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap'}`,
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
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    color: "gray",
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
                    },
                    fontWeight: "bold"
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    fontWeight: "bold"
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
        fontFamily: ["Aldrich", "Oswald", "Poppins",],
    },
});
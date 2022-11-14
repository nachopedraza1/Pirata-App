import { CssBaseline, ThemeProvider } from "@mui/material"
import { PirataTheme } from "./PirataTheme"

export const AppTheme = ({ children }) => {

    return (
        <ThemeProvider theme={PirataTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

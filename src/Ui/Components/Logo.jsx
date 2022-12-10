import { Box } from "@mui/material"

export const Logo = ({ size, p, pt, pb }) => {
    return (
        <Box textAlign="center" padding={p} paddingTop={pt} paddingBottom={pb} >
            <img src="../src/assets/Logo.png" alt="Belgrano Esports" width={size} />
        </Box>
    )
}

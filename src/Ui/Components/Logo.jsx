import { Box } from "@mui/material"

export const Logo = ({ size, p, pt, pb }) => {
    return (
        <Box textAlign="center" padding={p} paddingTop={pt} paddingBottom={pb} >
            <img src="/assets/images/Logo.png" alt="Belgrano Esports" width={size} />
        </Box>
    )
}

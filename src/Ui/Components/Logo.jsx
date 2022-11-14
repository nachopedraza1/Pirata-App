import { Box, Typography } from "@mui/material"

export const Logo = () => {
    return (
        <Box display="flex" alignItems="center">
            <Typography variant="h5" component="span" sx={{ color: "#FFFFFF", mr: 1 }}>RED</Typography>
            <img src="../src/assets/belgrano calavera.png" height="25px" alt="" />
            <Typography variant="h5" component="span" sx={{ color: "#2192FF", ml: 1 }}>PIRA7A</Typography>
        </Box>
    )
}

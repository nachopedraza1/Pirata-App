import { Box, Typography } from "@mui/material"

export const Logo = ({ color }) => {
    return (
        <Box display="flex" alignItems="center">
            <Typography variant="h5" component="span" sx={{ color: `${color}`, mr: 1 }}>RED</Typography>
            <img src="../src/assets/belgrano-calavera-white.png" height="25px" alt="" />
            <Typography variant="h5" component="span" sx={{ color: "#2192FF", ml: 1 }}>PIRA7A</Typography>
        </Box>
    )
}

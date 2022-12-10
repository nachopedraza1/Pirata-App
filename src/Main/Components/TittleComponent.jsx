import { Box, Typography } from "@mui/material"

export const TittleComponent = ({ tittle }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            sx={{
                width: "100%",
                height: "50px",
                backgroundColor: "backgraunds.main",
                borderLeft: "5px solid",
                borderColor: "primary.main",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px"
            }}>
            <Typography variant="h6" color="white" ml={2} fontFamily="Aldrich"> {tittle} </Typography>
        </Box>
    )
}

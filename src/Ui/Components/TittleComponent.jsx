import { Box, Typography } from "@mui/material"

export const TittleComponent = ({ tittle }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            padding={4}
            sx={{
                width: "100%",
                height: "50px",
                backgroundColor: "backgraunds.secondary",
                borderLeft: "5px solid",
                borderColor: "primary.main",
                marginBottom: "13px",
                marginTop: "13px",
            }}>
            <Typography variant="h6" color="white" fontFamily="Aldrich" data-aos="fade-left"> {tittle} </Typography>
        </Box>
    )
}

import { Box } from "@mui/material"

export const MainLayout = ({ children }) => {
    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundAttachment: "fixed",
            backgroundColor: "backgraunds.black",
           /*  backgroundImage: `url(${"../src/assets/bg-texture-01.jpg"})`, */
            /* backgroundImage: `url(${"../src/assets/Login.jpg"})`, */
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            paddingBottom: "70px"
        }}>
            {children}
        </Box>
    )
}

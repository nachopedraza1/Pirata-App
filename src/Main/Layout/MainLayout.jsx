import { Box, Container } from "@mui/material"

export const MainLayout = ({ children, bgColor, bgImg, bgImgMobile = bgImg }) => {

    return (
        <>
            <Box sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundAttachment: "fixed",
                backgroundColor: bgColor,
                backgroundImage: {
                    xs: `url(${bgImgMobile})`, md: `url(${bgImg})`
                },
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                paddingBottom: "70px",
            }}>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </Box>
        </>
    )
}

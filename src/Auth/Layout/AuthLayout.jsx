import { Grid, Typography, Box } from "@mui/material"
import { Logo } from "../../Ui/Components/Logo"
import { SocialButtons, CheckingAuth } from "../../Ui/Components"
import { useSelector } from "react-redux"


export const AuthLayout = ({ children, tittle }) => {

    const { status } = useSelector(state => state.auth)

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={
                {
                    minHeight: "100vh",
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "primary.main",
                    backgroundImage: "url(../src/assets/bg-redBelgrano.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                }
            }
        >

            <Grid
                item
                alignItems={"start"}
                xs={6}
                sx={{
                    display: { xs: "none", md: "flex" },
                    backgroundImage: "url(../src/assets/bg-login-1-1.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    borderRight: "10px solid black",
                    width: "100%",
                    height: "100%"
                }}
            >

                <Box padding={2}>
                    <Logo color="white" />
                </Box>

            </Grid>

            <Grid
                zIndex="2"
                item
                xs={11}
                md={5}
                boxShadow={3}
                sx={{
                    maxWidth: { sm: 480 },
                    margin: "0 auto",
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 1,
                }}
            >

                <Typography variant="h5" sx={{ mb: 1 }}> {tittle} </Typography>

                {(status === "checking") ? <CheckingAuth /> : children}

                <SocialButtons />

            </Grid>

        </Grid >
    )
}

import { useDispatch, useSelector } from "react-redux"
import { startFacebookLogin, startGitHubLogin, startLoginGoogle, startTwitterLogin } from "../../Redux/Thunks"

import { CheckingAuth, SocialButtons } from "../../Ui/Components"
import { Grid, Typography, Divider, Button } from "@mui/material"
import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material"

export const AuthLayout = ({ children, tittle }) => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const onTwitterLogin = () => {
        dispatch(startTwitterLogin())
    }
    const onFacebookLogin = () => {
        dispatch(startFacebookLogin())
    }

    const onGoogleLogin = () => {
        dispatch(startLoginGoogle())
    }

    const onGitHubLogin = () => {
        dispatch(startGitHubLogin())
    }

    const isDisabled = tittle === "Registro";

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
                width: "100%",
                height: "100%",
                backgroundColor: "primary.main",
                backgroundImage: "url(../src/assets/bg-texture-01.jpg)",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
            }}
        >

            <Grid
                position="relative"
                container
                justifyContent="space-around"
                alignItems="center"
                sx={{
                    backgroundColor: "white",
                    padding: 2,
                    margin: 2,
                    borderRadius: 1,
                    maxWidth: { xs: "450px", md: "970px" },
                    marginTop:{xs:"80px", md:"0px"}
                }}>

                <Grid position="absolute" top="-60px" >
                    <img src="../src/assets/Logo.png" alt="" width="150px" />
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={5}
                    padding={1}
                >

                    <Typography variant="h5" sx={{ mb: 1 }}> {tittle} </Typography>

                    {(status === "checking") ? <CheckingAuth /> : children}

                </Grid>

                <Divider orientation="vertical" flexItem >
                    <img src="../src/assets/belgrano-calavera-black.png" width="50px" alt="" />
                </Divider>

                <Grid
                    className="animate__animated animate__fadeIn"
                    item
                    xs={12}
                    md={5}
                    padding={1}
                >
                    <Button
                        startIcon={<Twitter />}
                        disabled={isDisabled}
                        onClick={() => onTwitterLogin()}
                        variant="contained"
                        fullWidth
                        sx={{ mb: 2, p: 1 }}>
                        <Typography variant="p"> Twitter </Typography>
                    </Button>
                    <Button
                        startIcon={<Facebook />}
                        disabled={isDisabled}
                        onClick={() => onFacebookLogin()}
                        variant="contained"
                        fullWidth
                        sx={{ mb: 2, p: 1, backgroundColor: "#4267B2" }}>
                        <Typography variant="p"> Facebook </Typography>
                    </Button>
                    <Button
                        startIcon={<Google />}
                        disabled={isDisabled}
                        onClick={() => onGoogleLogin()}
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2, p: 1, }}>
                        <Typography variant="p"> Google </Typography>
                    </Button>
                    <Button
                        startIcon={<GitHub />}
                        disabled={isDisabled}
                        onClick={() => onGitHubLogin()}
                        variant="contained"
                        fullWidth
                        sx={{ mb: 2, p: 1, backgroundColor: "#171515", "&:hover": { backgroundColor: "#171515" } }}>
                        <Typography variant="p"> GitHub </Typography>
                    </Button>
                </Grid>

                <SocialButtons />
            </Grid>

        </Grid >
    )
}

import { useDispatch, useSelector } from "react-redux"
import { startFacebookLogin, startGitHubLogin, startLoginGoogle, startTwitterLogin } from "../../Redux/Thunks"

import { CheckingAuth, SocialButtons, TittleComponent } from "../../Ui/Components"
import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material"
import { Grid, Typography, Divider, Button } from "@mui/material"

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

    const isDisabled = tittle === "REGISTRO";

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
                backgroundImage: "url(/assets/images/bg-main-desk.jpg)",
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
                    backgroundColor: "backgraunds.black",
                    padding: 2,
                    margin: 2,
                    borderRadius: 1,
                    maxWidth: { xs: "450px", md: "970px" },
                    marginTop: { xs: "80px", md: "0px" }
                }}>

                <Grid position="absolute" top="-60px" zIndex={1} >
                    <img src="/assets/images/logo.png" alt="" width="150px" />
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={5}
                    mt={{ xs: 4, md: 0 }}
                    padding={1}
                >

                    <Typography variant="h5" sx={{ mb: 1 }} fontFamily="Aldrich" color="white"> {tittle} </Typography>

                    {(status === "checking") ? <CheckingAuth /> : children}

                </Grid>

                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        color: "white",
                        "&::before, &::after": {
                            borderColor: "secondary.light",
                        }
                    }}>
                    <img src="/assets/images/belgrano-calavera-white.png" width="50px" alt="" />
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
                        Twitter
                    </Button>
                    <Button
                        startIcon={<Facebook />}
                        disabled={isDisabled}
                        onClick={() => onFacebookLogin()}
                        variant="contained"
                        fullWidth
                        sx={{ mb: 2, p: 1, backgroundColor: "#4267B2" }}>
                        Facebook
                    </Button>
                    <Button
                        startIcon={<Google />}
                        disabled={isDisabled}
                        onClick={() => onGoogleLogin()}
                        variant="contained"
                        fullWidth
                        sx={{ mb: 2, p: 1, backgroundColor: "white", color: "primary.main" }}>
                        Google
                    </Button>
                    <Button
                        startIcon={<GitHub />}
                        disabled={isDisabled}
                        onClick={() => onGitHubLogin()}
                        variant="contained"
                        fullWidth
                        sx={{ mb: 2, p: 1, backgroundColor: "#171515", "&:hover": { backgroundColor: "#171515" } }}>
                        GitHub
                    </Button>
                </Grid>

                <SocialButtons />
            </Grid>

        </Grid >
    )
}

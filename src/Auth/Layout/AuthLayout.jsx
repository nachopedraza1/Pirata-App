import { Grid, Typography, Divider, Button } from "@mui/material"
import { CheckingAuth, SocialButtons } from "../../Ui/Components"
import { useDispatch, useSelector } from "react-redux"
import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material"
import { startFacebookLogin, startTwitterLogin } from "../../Redux/Thunks"
import { twitterLogin } from "../../Firebase/provider"


export const AuthLayout = ({ children, tittle }) => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const onFacebookLogin = () => {
        dispatch(startFacebookLogin())
    }

    const onTwitterLogin = () => {
        dispatch(startTwitterLogin())
    }

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={
                {
                    minHeight: "100vh",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "primary.main",
                    backgroundImage: "url(../src/assets/bg-login-2.jpg)",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                }
            }
        >

            <Grid
                container
                justifyContent="space-around"
                alignItems="center"
                sx={{
                    backgroundColor: "white",
                    padding: 2,
                    margin: 2,
                    borderRadius: 1,
                    maxWidth: { xs: "450px", md: "970px" }
                }}>
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
                    OR
                </Divider>

                <Grid
                    item
                    xs={12}
                    md={5}
                    padding={1}
                >
                    <Button onClick={() => onTwitterLogin()} startIcon={<Twitter />} variant="contained" fullWidth sx={{ mb: 2, p: 1 }}>
                        <Typography variant="p"> Twitter </Typography>
                    </Button>
                    <Button onClick={() => onFacebookLogin()} startIcon={<Facebook />} variant="contained" fullWidth sx={{ mb: 2, p: 1, backgroundColor: "#4267B2" }}>
                        <Typography variant="p"> Facebook </Typography>
                    </Button>
                    <Button startIcon={<Google />} variant="outlined" fullWidth sx={{ mb: 2, p: 1, }}>
                        <Typography variant="p"> Google </Typography>
                    </Button>
                    <Button startIcon={<GitHub />} variant="contained" fullWidth sx={{ mb: 2, p: 1, backgroundColor: "#171515", "&:hover": { backgroundColor: "#171515" } }}>
                        <Typography variant="p"> GitHub </Typography>
                    </Button>
                </Grid>

                <SocialButtons />
            </Grid>


        </Grid >
    )
}

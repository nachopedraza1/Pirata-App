import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"

import { AuthLayout } from "../Layout/AuthLayout"

import { useForm } from "../../hooks/useForm"
import { startLogin, startLoginGoogle } from "../../Redux/Thunks"

import { Grid, TextField, Link, Button, Typography, Alert } from "@mui/material"
import { Google, LoginRounded } from "@mui/icons-material"


const formDataLogin = {
    email: "",
    password: ""
}

export const LoginPage = () => {

    const { errorMessage } = useSelector(state => state.auth)

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { email, password, formState, onInputChange } = useForm(formDataLogin);

    const dispatch = useDispatch();

    const onLoginWithGoogle = () => {
        dispatch(startLoginGoogle())
    }

    const onLogin = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        dispatch(startLogin(formState))
    }

    return (
        <AuthLayout tittle={"Iniciar Sesion"}>
            <form onSubmit={onLogin} >
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <TextField
                            sx={{ mb: 2 }}
                            type="email"
                            placeholder="Email"
                            label="Email"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            sx={{ mb: 2 }}
                            type="password"
                            placeholder="Contraseña"
                            label="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} mb={1}
                        display={formSubmitted && !!errorMessage ? "" : "none"}>
                        <Alert severity='error' >
                            {errorMessage}
                        </Alert>
                    </Grid>

                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" sx={{ padding: 1 }} fullWidth >
                                <LoginRounded />
                                <Typography sx={{ ml: 1 }}>LOGIN</Typography>
                            </Button>
                        </Grid>

                      {/*   <Grid item xs={6}>
                            <Button onClick={() => onLoginWithGoogle()} variant="contained" sx={{ padding: 1 }} fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>GOOGLE</Typography>
                            </Button>
                        </Grid> */}

                        <Grid container justifyContent="end" mt={2}>
                            <Link component={RouterLink} to="/auth/register">
                                Crear una cuenta
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

            </form>
        </AuthLayout >
    )
}

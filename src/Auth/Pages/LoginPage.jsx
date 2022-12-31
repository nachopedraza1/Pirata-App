import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"

import { logout } from "../../Redux/Slices"
import { startLogin } from "../../Redux/Thunks"

import { useForm } from "../../hooks"

import { AuthLayout } from "../Layout/AuthLayout"
import { AccountCircle, LoginRounded, Visibility, VisibilityOff } from "@mui/icons-material"
import { Grid, TextField, Link, Button, Alert, InputAdornment, IconButton } from "@mui/material"



const formDataLogin = {
    email: "",
    password: ""
}

export const LoginPage = () => {

    const { errorMessage } = useSelector(state => state.auth)

    const [showPassword, setShowPassword] = useState(false);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { email, password, formState, onInputChange } = useForm(formDataLogin);

    const dispatch = useDispatch();

    const onLogin = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        dispatch(startLogin(formState))
    }

    useEffect(() => {
        dispatch(logout())
    }, []);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <AuthLayout tittle={"INICIAR SESION"}>
            <form onSubmit={onLogin}>
                <Grid container direction="column" className="animate__animated animate__fadeIn">
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
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <AccountCircle sx={{ color: "gray" }} />
                                    </InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            sx={{ mb: 2 }}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Contraseña"
                            label="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            sx={{ p: 0, color: "gray" }}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} mb={1}
                        display={!!errorMessage ? "" : "none"}>
                        <Alert severity='error' >
                            {
                                errorMessage === "Firebase: Error (auth/popup-closed-by-user)."
                                    ? "Por favor, no cierres la ventana de autenticación."
                                    : "Usuario o contraseña invalido."
                            }
                        </Alert>
                    </Grid>

                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" sx={{ padding: 1 }} fullWidth startIcon={<LoginRounded />}>
                                LOGIN
                            </Button>
                        </Grid>

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

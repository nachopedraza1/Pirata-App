import { useState } from "react"
import { useForm } from "../../hooks"
import { Link as RouterLink } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { startRegisterUser } from "../../Redux/Thunks/thunks"

import { AuthLayout } from "../Layout/AuthLayout"
import { Alert, Button, Grid, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material"
import { AccountCircle, Email, HowToReg, Visibility, VisibilityOff } from "@mui/icons-material"

const formData = {
    displayName: "",
    email: "",
    password: "",
}

const formValidations = {
    displayName: [(value) => value.length >= 1, "Ingresa un nombre de usuario valido."],
    email: [(value) => value.includes("@"), "Ingresa un Email valido."],
    password: [(value) => value.length >= 6, "La contraseñas debe tener 6 caracteres."],
}

export const RegisterPage = () => {

    const { errorMessage } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        dispatch(startRegisterUser(formState))
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { formState, onInputChange, displayName,
        email, password, displayNameValidate,
        emailValidate, passwordValidate, isFormValid
    } = useForm(formData, formValidations);

    return (
        <AuthLayout tittle={"REGISTRO"}>
            <form onSubmit={onSubmit} autoComplete="off" >
                <Grid container className="animate__animated animate__fadeIn">
                    <Grid item xs={12}>
                        <TextField
                            sx={{ mb: 2 }}
                            type="text"
                            placeholder="Nombre de Usuario"
                            label="Usuario"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValidate && formSubmitted}
                            helperText={formSubmitted && displayNameValidate}
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
                            type="text"
                            placeholder="Ingresa tu Email"
                            label="Email"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValidate && formSubmitted}
                            helperText={formSubmitted && emailValidate}
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <Email sx={{ color: "gray" }} />
                                    </InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            sx={{ mb: 2 }}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Ingresa una Contraseña"
                            label="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValidate && formSubmitted}
                            helperText={formSubmitted && passwordValidate}
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
                        display={formSubmitted && !!errorMessage ? "" : "none"}>
                        <Alert severity='error' >
                            {errorMessage}
                        </Alert>
                    </Grid>

                    <Button type="submit" variant="contained" fullWidth sx={{ p: 1 }} startIcon={<HowToReg />}>
                        Confirmar
                    </Button>

                    <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
                        <Typography sx={{ mr: 1, color: "gray" }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}

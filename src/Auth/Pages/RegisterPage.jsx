import { useState } from "react"
import { useForm } from "../../hooks"
import { Link as RouterLink } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { startRegisterUser } from "../../Redux/Thunks/thunks"

import { AuthLayout } from "../Layout/AuthLayout"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import styled from "styled-components"

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

const TextFieldAuth = styled(TextField)({
    '& label': {
        color: '#6c757d',
    },
    '& .MuiOutlinedInput-root': {
        "& fieldset": {
            borderColor: "rgb(192, 192, 192)"
        }, '&:hover fieldset': {
            borderColor: 'rgb(192, 192, 192)',
        },
        '&.Mui-focused fieldset': {
            borderColor: "#2192FF",
        },
        color: "#6c757d",
    },
});

export const RegisterPage = () => {

    const { errorMessage } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        dispatch(startRegisterUser(formState))
    }

    const { formState, onInputChange, displayName,
        email, password, displayNameValidate,
        emailValidate, passwordValidate, isFormValid
    } = useForm(formData, formValidations);

    return (
        <AuthLayout tittle={"Registro"}>
            <form onSubmit={onSubmit}>
                <Grid container className="animate__animated animate__fadeIn">
                    <Grid item xs={12}>
                        <TextFieldAuth
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
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextFieldAuth
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
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextFieldAuth
                            sx={{ mb: 2 }}
                            type="password"
                            placeholder="Ingresa una Contraseña"
                            label="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValidate && formSubmitted}
                            helperText={formSubmitted && passwordValidate}
                        />
                    </Grid>

                    <Grid item xs={12} mb={1}
                        display={formSubmitted && !!errorMessage ? "" : "none"}>
                        <Alert severity='error' >
                            {errorMessage}
                        </Alert>
                    </Grid>

                    <Button type="submit" variant="contained" fullWidth sx={{ p: 1 }}>
                        Confirmar
                    </Button>

                    <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}

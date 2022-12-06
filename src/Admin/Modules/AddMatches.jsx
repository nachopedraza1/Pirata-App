
import { useForm } from '../../hooks';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore/lite';

import { TittleComponent } from '../../Main/Components';
import { AdminPanelLayout } from '../Layout/AdminPanelLayout';
import { Grid, Select, InputLabel, MenuItem, FormControl, Button, styled } from '@mui/material';
import { FirebaseDB } from '../../Firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { onLoadMatches } from '../../Redux/Thunks';
import { MatchItem } from '../Components/MatchItem';

const initialForm = {
    juego: "",
    rival: "",
    puntosLocal: "",
    puntosRival: "",
}

export const AddMatches = () => {

    const { matches } = useSelector(state => state.matches);

    const dispatch = useDispatch();

    const { formState, rival, juego, puntosRival, puntosLocal, onInputChange } = useForm(initialForm);

    const onAddMatch = async (event) => {
        event.preventDefault();

        const match = { ...formState, order: matches.length + 1 }

        const reference = collection(FirebaseDB, "matches");
        await addDoc(reference, match);
        dispatch(onLoadMatches());
    }

    const onDeteleMatch = async (id) => {
        await deleteDoc(doc(FirebaseDB, "matches", `${id}`))
        dispatch(onLoadMatches());
    }


    const CustomSelect = styled(Select)(() => ({
        "&.MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white"
            },
            "& .MuiSvgIcon-root": {
                color: "white",
            },
        },
        color: "white",
    }));

    return (
        <AdminPanelLayout>
            <Grid container spacing={2}>

                <Grid item xs={12} lg={8} >
                    <TittleComponent tittle="AGREGAR PARTIDO" />
                    <form onSubmit={onAddMatch}>
                        <Grid container direction="column" bgcolor="#1f2024" borderRadius={1} gap={1} >
                            <Grid
                                container
                                textAlign="center"
                                justifyContent="center"
                                padding={2}
                                alignItems={{ sm: "center" }}
                            >

                                <Grid item xs={12} md={2} textAlign="center" padding={1}>
                                    <img src="../src/assets/Logo.png" alt="" width="100px" />
                                </Grid>

                                <Grid item xs={12} md={3} padding={1}>
                                    <FormControl fullWidth>
                                        <InputLabel>Puntos Local</InputLabel>
                                        <Select
                                            required={true}
                                        <InputLabel sx={{ color: "white" }}>Puntos Local</InputLabel>
                                        <CustomSelect
                                            required={true}
                                            name="puntosLocal"
                                            value={puntosLocal}
                                            onChange={onInputChange}
                                            label="Puntos Local"
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={2} display="flex" justifyContent="center" padding={1}>
                                    <img src="../src/assets/swords1.png" alt="" width="40px" />
                                </Grid>

                                <Grid item xs={12} md={3} padding={1}>
                                    <FormControl fullWidth >
                                        <InputLabel>Puntos Rival</InputLabel>
                                        <Select
                                            required={true}
                                        <InputLabel sx={{ color: "white" }}>Puntos Rival</InputLabel>
                                        <CustomSelect
                                            required={true}
                                            name="puntosRival"
                                            value={puntosRival}
                                            onChange={onInputChange}
                                            label="Puntos Rival"
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={2} textAlign="center" padding={1}>
                                    <img src="../src/assets/Logo.png" alt="" width="100px" />
                                </Grid>

                                <Grid item xs={12} md={4} padding={1}>
                                    <FormControl fullWidth>
                                        <InputLabel>Rival</InputLabel>
                                        <Select
                                            required={true}
                                        <InputLabel sx={{ color: "white" }}>Rival</InputLabel>
                                        <CustomSelect
                                            required={true}
                                            name="rival"
                                            value={rival}
                                            onChange={onInputChange}
                                            label="Rival"
                                        >
                                            <MenuItem value="Faze">Faze</MenuItem>
                                            <MenuItem value="Isurus">Isurus</MenuItem>
                                            <MenuItem value="Telecom T1">Telecom T1</MenuItem>
                                            <MenuItem value="Astralis">Astralis</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={4} padding={1}>
                                    <FormControl fullWidth>
                                        <InputLabel sx={{ color: "white" }}>Esport</InputLabel>
                                        <Select
                                            required={true}
                                        <CustomSelect
                                            required={true}
                                            name="juego"
                                            value={juego}
                                            onChange={onInputChange}
                                            label="Esport"
                                        >
                                            <MenuItem value="CSGO">Counter Strike</MenuItem>
                                            <MenuItem value="CSGO1">Counter Strike</MenuItem>
                                            <MenuItem value="CSGO2">Counter Strike</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} display="flex" justifyContent="end" padding={1}>
                                    <Button type='submit' variant='outlined'>
                                        Agregar
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </form >
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TittleComponent tittle="HISTORIAL" />
                    <Grid container direction="column">
                        {
                            matches.map(match => (<MatchItem match={match} key={match.id} onDeteleMatch={onDeteleMatch} />))
                        }
                    </Grid>
                </Grid>

            </Grid >
        </AdminPanelLayout >
    );
}

import { useForm } from '../../hooks';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore/lite';

import { TittleComponent } from '../../Main/Components';
import { AdminPanelLayout } from '../Layout/AdminPanelLayout';
import { Grid, Select, InputLabel, MenuItem, FormControl, Typography, Button, styled, Divider } from '@mui/material';
import { FirebaseDB } from '../../Firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { onLoadMatches } from '../../Redux/Thunks';
import { MatchItem } from '../Components/MatchItem';

const initialForm = {
    rival: "",
    puntosLocal: "",
    puntosRival: "",
}

export const AddMatches = () => {

    const { matches } = useSelector(state => state.matches);

    const dispatch = useDispatch();

    const { formState, rival, puntosRival, puntosLocal, onInputChange } = useForm(initialForm);

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
    }));

    return (
        <AdminPanelLayout>
            <Grid container spacing={2}>

                <Grid item xs={12} lg={8} >
                    <TittleComponent tittle="AGREGAR PARTIDO" />
                    <form onSubmit={onAddMatch}>
                        <Grid container direction="column" bgcolor="#1f2024" borderRadius={1} gap={1} >
                            <Grid
                                item
                                display="flex"
                                textAlign="center"
                                padding={2}
                                alignItems={{ sm: "center" }}
                                flexDirection={{ xs: "column", sm: "row" }}>

                                <Grid item xs={12} md={2} textAlign="center">
                                    <img src="../src/assets/Logo.png" alt="" width="100px" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth sx={{ m: 1, maxWidth: "150px" }}>
                                        <InputLabel sx={{ color: "white" }}>Puntos Local</InputLabel>
                                        <CustomSelect
                                            sx={{ color: "white" }}
                                            classes={CustomSelect}
                                            name="puntosLocal"
                                            value={puntosLocal}
                                            onChange={onInputChange}
                                            label="Puntos Local"
                                            placeholder="Puntos Local"
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </CustomSelect>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={1} display="flex" justifyContent="center">
                                    <img src="../src/assets/swords1.png" alt="" width="40px" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth sx={{ m: 1, maxWidth: "150px" }}>
                                        <InputLabel sx={{ color: "white" }}>Puntos Rival</InputLabel>
                                        <CustomSelect
                                            sx={{ color: "white" }}
                                            name="puntosRival"
                                            value={puntosRival}
                                            onChange={onInputChange}
                                            label="Puntos Rival"
                                            placeholder="Puntos Rival"
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </CustomSelect>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <FormControl fullWidth sx={{ m: 1, maxWidth: "150px" }}>
                                        <InputLabel sx={{ color: "white" }}>Rival</InputLabel>
                                        <CustomSelect
                                            sx={{ color: "white" }}
                                            name="rival"
                                            value={rival}
                                            onChange={onInputChange}
                                            label="Rival"
                                            placeholder="Rival"
                                        >
                                            <MenuItem value="Faze">Faze</MenuItem>
                                            <MenuItem value="Isurus">Isurus</MenuItem>
                                            <MenuItem value="Telecom T1">Telecom T1</MenuItem>
                                            <MenuItem value="Astralis">Astralis</MenuItem>
                                        </CustomSelect>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Divider sx={{ color: "white" }} />

                            <Grid item display="flex" justifyContent="end">
                                <Button type='submit' variant='contained' sx={{ m: 1, mb: 2 }}>
                                    Agregar
                                </Button>
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
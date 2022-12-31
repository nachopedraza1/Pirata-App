import { useDispatch, useSelector } from "react-redux";
import { onLoadLeagues } from "../../Redux/Thunks";

import { useForm } from "../../hooks"

import { FirebaseDB } from "../../Firebase/config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore/lite";

import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { EmojiEvents, SportsEsports } from "@mui/icons-material";
import { AdminPanelLayout } from "../Layout/AdminPanelLayout"
import { TittleComponent } from "../../Ui/Components";
import { LeagueItem } from "../Components/LeagueItem";
import { alert } from "../../Ui/Alerts/Alerts";


export const AddLeagues = () => {

    const dispatch = useDispatch();

    const { esports, leagues } = useSelector(state => state.mainData)

    const { league, esport, formState, onInputChange } = useForm({ league: "", esport: "" });

    const onAddLeague = async (event) => {
        event.preventDefault();

        const queryRef = collection(FirebaseDB, "leagues");
        await addDoc(queryRef, { ...formState });
        dispatch(onLoadLeagues())
        alert("success", "Liga agregada")
    }

    const onDeleteLeague = async (id) => {
        await deleteDoc(doc(FirebaseDB, "leagues", id))
        dispatch(onLoadLeagues())
        alert("error", "Liga eliminada")
    }

    return (
        <AdminPanelLayout>
            <Grid container spacing={2} className="animate__animated animate__fadeIn">
                <Grid item xs={12} lg={8} >
                    <TittleComponent tittle="AGREGAR LIGA" />
                    <form onSubmit={onAddLeague}>
                        <Grid container direction="column" bgcolor="backgraunds.main" gap={1}  >
                            <Grid container spacing={2} padding={2}>

                                <Grid item xs={12} md={6}  >
                                    <TextField
                                        required={true}
                                        fullWidth
                                        placeholder="Liga"
                                        label="Liga"
                                        name="league"
                                        value={league}
                                        onChange={onInputChange}
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <EmojiEvents sx={{ color: "gray" }} />
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Esport</InputLabel>
                                        <Select
                                            required={true}
                                            name="esport"
                                            value={esport}
                                            onChange={onInputChange}
                                            label="Esport"
                                            endAdornment={<SportsEsports sx={{ mr: 2 }} />}
                                        >
                                            {
                                                esports.map(esport => (<MenuItem value={esport.game} key={esport.id}>{esport.game}</MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>

                            <Grid item xs={12} display="flex" justifyContent="end" padding={1}>
                                <Button type='submit' variant='outlined'>
                                    Agregar
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TittleComponent tittle="LIGAS" />
                    <Grid container direction="column">
                        {leagues.map(league => (<LeagueItem key={league.id} {...league} onDeleteLeague={onDeleteLeague} />))}
                    </Grid>
                </Grid>

            </Grid>
        </AdminPanelLayout>
    )
}
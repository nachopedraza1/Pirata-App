import { useState, useEffect } from "react";

import { useForm } from "../../hooks";
import { uuidv4 } from "@firebase/util";

import { TittleComponent } from "../../Ui/Components";
import { PlayerItem } from "./PlayerItem";
import { DeleteForever, Event, GroupAdd, Instagram, LocationCity, LocationOn, PersonAddAlt1, SportsEsports, Twitter, YouTube } from "@mui/icons-material"
import { Button, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Modal, Select, TextField, Tooltip, Typography } from "@mui/material"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

const initialForm = {
    player: "",
    country: "",
    city: "",
    age: "",
    rol: "",
    twitter: "",
    instagram: "",
    youtube: "",
    twitch: "",
}

export const EsportItem = ({ esport, onDeteleEsport, updateTeam }) => {

    const [openModal, setOpenModal] = useState(false);

    const { onInputChange, formState, player, country, city, age, rol, twitter, instagram, youtube, twitch } = useForm(initialForm)

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(esport.players)
    }, []);

    const onDeletePlayer = (id) => {
        const newPlayers = players.filter(player => player.id !== id);
        setPlayers(newPlayers);
    }

    const onAddPlayer = (event) => {
        event.preventDefault();
        setPlayers([...players, { id: uuidv4(), ...formState }]);
    }


    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        maxWidth: "1300px",
        bgcolor: 'backgraunds.main',
        boxShadow: 25,
        padding: 4,
    };

    return (
        <>
            <Grid
                container
                padding={2}
                alignItems="center"
                justifyContent="space-between"
                bgcolor="backgraunds.main"
            >
                <Grid item xs={2}>
                    <img src={`/assets/images/esports/${esport.game}.png`} width="50px" alt="" />
                </Grid>

                <Grid item xs={8}>
                    <Typography variant="h6" color="white" noWrap> {(esport.game).toUpperCase()} </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        onClick={() => setOpenModal(true)}
                        variant="text"
                        sx={{ padding: 0, minWidth: "100%" }} >
                        <Tooltip title="Editar Equipo" arrow>
                            <GroupAdd />
                        </Tooltip>
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ color: "white" }} />

            <Modal
                sx={{ m: 2, overflowY: { xs: "scroll", md: "hidden" } }}
                className="animate__animated animate__fadeIn"
                open={openModal}
                onClose={() => setOpenModal(false)}
            >

                <Grid container sx={styleModal} alignItems="start">

                    <Grid item xs={12} textAlign="center">
                        <img src={`/assets/images/esports/${esport.game}.png`} width="200px" alt="" className="animate__animated animate__fadeInDown" />
                    </Grid>

                    <form onSubmit={onAddPlayer}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} md={6}>
                                <TittleComponent tittle="AGREGAR JUGADOR" />
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            required={true}
                                            fullWidth
                                            label="Jugador"
                                            placeholder="Nombre del jugador"
                                            name="player"
                                            value={player}
                                            onChange={onInputChange}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <SportsEsports sx={{ color: "gray" }} />
                                                    </InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel>Rol</InputLabel>
                                            <Select
                                                required={true}
                                                name="rol"
                                                value={rol}
                                                label="Rol"
                                                onChange={onInputChange}
                                            >
                                                <MenuItem value="PLAYER">PLAYER</MenuItem>
                                                <MenuItem value="MANAGER">MANAGER</MenuItem>
                                                <MenuItem value="COACH">COACH</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            required={true}
                                            fullWidth
                                            label="Edad"
                                            placeholder="Edad jugador"
                                            name="age"
                                            value={age}
                                            onChange={onInputChange}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <Event sx={{ color: "gray" }} />
                                                    </InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            required={true}
                                            fullWidth
                                            label="Pais"
                                            placeholder="Pais de origen"
                                            name="country"
                                            value={country}
                                            onChange={onInputChange}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <LocationOn sx={{ color: "gray" }} />
                                                    </InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            required={true}
                                            fullWidth
                                            label="Ciudad"
                                            placeholder="Ciudad"
                                            name="city"
                                            value={city}
                                            onChange={onInputChange}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <LocationCity sx={{ color: "gray" }} />
                                                    </InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="filled"
                                            fullWidth
                                            label="Twitter"
                                            placeholder="Twitter Link"
                                            name="twitter"
                                            value={twitter}
                                            onChange={onInputChange}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <Twitter sx={{ color: "#00aced" }} />
                                                    </InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="filled"
                                            fullWidth
                                            label="Instagram"
                                            placeholder="Instagram Link"
                                            name="instagram"
                                            value={instagram}
                                            onChange={onInputChange}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <Instagram sx={{ color: "#e4405f" }} />
                                                    </InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="filled"
                                            fullWidth
                                            label="Twitch"
                                            placeholder="Twitch Link"
                                            name="twitch"
                                            value={twitch}
                                            onChange={onInputChange}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <FontAwesomeIcon color="#6441a5" fontSize="20px" icon={faTwitch} />
                                                    </InputAdornment>
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="filled"
                                            fullWidth
                                            label="YouTube"
                                            placeholder="YouTube Link"
                                            name="youtube"
                                            value={youtube}
                                            onChange={onInputChange}
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                        <YouTube sx={{ color: "red" }} />
                                                    </InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} textAlign="end" >
                                        <Button
                                            type="submit"
                                            endIcon={<PersonAddAlt1 />}
                                            variant="outlined"
                                        >
                                            Agregar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TittleComponent tittle="JUGADORES" />
                                <Grid item xs={12} mt={2} maxHeight="200px" sx={{ overflowY: "scroll", overflowX: "hidden" }} className="CustomScrollBar">
                                    {
                                        players.map(player => (<PlayerItem key={player.id} player={player} onDeletePlayer={onDeletePlayer} />))
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>

                    <Grid container justifyContent="space-between" alignItems="end">
                        <Button
                            onClick={() => onDeteleEsport(esport.id)}
                            variant="outlined"
                            endIcon={<DeleteForever color="error" />}
                            sx={{ color: "red", border: "1px solid red", "&:hover": { border: "1px solid red" } }}
                        >
                            Eliminar Equipo
                        </Button>

                        <Button
                            onClick={() => { updateTeam(esport.id, players); setOpenModal(false) }}
                            variant="outlined"
                        >
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
}

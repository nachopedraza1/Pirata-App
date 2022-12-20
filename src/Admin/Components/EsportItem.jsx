import { useState, useEffect } from "react";

import { useForm } from "../../hooks";
import { uuidv4 } from "@firebase/util";

import { TittleComponent } from "../../Ui/Components";
import { DeleteForever, GroupAdd, PersonAddAlt1 } from "@mui/icons-material"
import { Button, Divider, Grid, Modal, TextField, Tooltip, Typography } from "@mui/material"
import { PlayerItem } from "./PlayerItem";

export const EsportItem = ({ esport, onDeteleEsport, updateTeam }) => {

    const [openModal, setOpenModal] = useState(false);

    const { onInputChange, player } = useForm({ player: "" })

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(esport.players)
    }, []);

    const AddPlayer = () => {
        setPlayers([...players, { id: uuidv4(), player }]);
    }

    const onDeletePlayer = (id) => {
        const newPlayers = players.filter(player => player.id !== id);
        setPlayers(newPlayers);
    }



    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        maxWidth: "700px",
        height: "95vh",
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
                    <img src={`../src/assets/esports/${esport.game}.png`} width="50px" alt="" />
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
                sx={{ m: 2 }}
                className="animate__animated animate__fadeIn"
                open={openModal}
                onClose={() => setOpenModal(false)}
            >

                <Grid container sx={styleModal} direction="column" justifyContent="space-between">

                    <Grid container justifyContent="center" alignItems="center" >
                        <img src={`../src/assets/esports/${esport.game}.png`} width="200px" alt="" className="animate__animated animate__fadeInDown" />
                        <TittleComponent tittle="AGREGAR JUGADOR" />
                        <Grid item xs={10} >
                            <TextField
                                autoComplete="off"
                                fullWidth
                                label="Jugador"
                                placeholder="Nombre del jugador"
                                name="player"
                                value={player}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={2} textAlign="center" >
                            <Button
                                onClick={() => AddPlayer(esport.id)}
                                variant="outlined"
                            >
                                <PersonAddAlt1 />
                            </Button>
                        </Grid>

                        <Grid item xs={12} bgcolor="backgraunds.secondary" mt={2} maxHeight="200px" sx={{overflowY:"scroll", overflowX:"hidden"}}>
                            {
                                players.map(player => (<PlayerItem key={player.id} player={player} onDeletePlayer={onDeletePlayer} />))
                            }
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="space-between" alignItems="center" mt={3}>
                        <Button
                            onClick={() => onDeteleEsport(esport.id)}
                            variant="outlined"
                            endIcon={<DeleteForever color="error" />}
                            sx={{ color: "red", border: "1px solid red", "&:hover": { border: "1px solid red" } }}
                        >
                            Eliminar Equipo
                        </Button>

                        <Button
                            onClick={() => updateTeam(esport.id, players)}
                            variant="outlined"
                        >
                            Actualizar
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
}

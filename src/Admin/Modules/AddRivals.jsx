import { Grid, Input, InputLabel, TextField } from "@mui/material";
import { AdminPanelLayout } from "../Layout/AdminPanelLayout";

import { FirebaseDB } from "../../Firebase/config";
import { doc, updateDoc } from "firebase/firestore/lite";

import { TittleComponent } from "../../Main/Components";
import styled from "styled-components";

export const AddRivals = () => {

    const update = async () => {
        const washingtonRef = doc(FirebaseDB, "matches", "UMtVpdafbHJxR4fNhGrp");

        await updateDoc(washingtonRef, {
            juego: "true"
        });
    }

    return (
        <AdminPanelLayout>
            <Grid container spacing={2}>

                <Grid item xs={12} lg={8} >
                    <TittleComponent tittle="AGREGAR RIVAL" />
                    <form >
                        <Grid container direction="column" bgcolor="#1f2024" borderRadius={1} gap={1} >
                            <Grid item >

                                <TextField
                                    fullWidth
                                    label="Nuevo Rival"
                                />
                            </Grid>
                        </Grid>
                    </form >
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TittleComponent tittle="RIVALES" />
                    <Grid container direction="column">

                    </Grid>
                </Grid>

            </Grid >
        </AdminPanelLayout >
    )
}

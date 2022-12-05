import { Grid } from "@mui/material";
import { AdminPanelLayout } from "../Layout/AdminPanelLayout";

import { FirebaseDB } from "../../Firebase/config";
import { doc, updateDoc } from "firebase/firestore/lite";

import { TittleComponent } from "../../Main/Components";

export const AddRivals = () => {

    const update = async () => {
        const washingtonRef = doc(FirebaseDB, "matches", "UMtVpdafbHJxR4fNhGrp");

        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            juego: "true"
        });
    }

    return (
        <AdminPanelLayout>
            <Grid container spacing={2}>

                <Grid item xs={12} lg={8} >
                    <TittleComponent tittle="AGREGAR PARTIDO" />
                    <form >

                    </form >
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TittleComponent tittle="HISTORIAL" />
                    <Grid container direction="column">

                    </Grid>
                </Grid>

            </Grid >
        </AdminPanelLayout >
    )
}

import { useSelector } from "react-redux"

import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material"
import { DeleteForever } from "@mui/icons-material";

export const DateItem = ({ match, onDeteleDate }) => {

    const { rivals } = useSelector(state => state.mainData);

    const { logoRival } = rivals.find(logo => logo.teamName === match.rival) || {};

    return (
        <Grid
            container
            bgcolor="backgraunds.main"
            borderBottom="1px solid gray"
        >
            <Grid container bgcolor="#16171b" justifyContent="space-between">
                <Typography variant="p" p={1} color="white"> {match.date} / {match.time} / {match.plataform} </Typography>
                <Button
                    variant="text"
                    onClick={() => onDeteleDate(match.id)}
                    sx={{ padding: 0 }} >
                    <Tooltip title="Eliminar Fecha" arrow>
                        <DeleteForever color="error" />
                    </Tooltip>
                </Button>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between" padding={1} position="relative">
                <Grid item xs={1}>
                    <img src={`/assets/images/esports/${match.game}.png`} alt="" width="100%" style={{ maxWidth: "100px" }} />
                </Grid>
                <Grid item xs={1} display={{xs:"none", sm:"flex"}}>
                    <img src={`/assets/images/${match.plataform}.png`} alt="" width="100%" style={{ maxWidth: "30px" }} />
                </Grid>
                <Grid item xs={2} textAlign="center">
                    <img src="/assets/images/Logo.png" alt="" width="100%" style={{ maxWidth: "70px" }} />
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={1} display="flex" justifyContent="center">
                    <svg width="30" height="40" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7188 29.1289L18.5703 8.5625H24.957L12.5547 37H6.71484L3.25781 8.5625H9.33203L10.7188 29.1289Z" fill="white"></path>
                        <path d="M31.6562 38.4023C31.7344 37.8164 31.7083 37.3086 31.5781 36.8789C31.4609 36.4362 31.2591 36.0456 30.9727 35.707C30.6862 35.3685 30.3346 35.069 29.918 34.8086C29.5143 34.5482 29.0586 34.3008 28.5508 34.0664C27.6133 33.6237 26.7279 33.1289 25.8945 32.582C25.0612 32.0352 24.3385 31.4102 23.7266 30.707C23.1146 30.0039 22.6393 29.2096 22.3008 28.3242C21.9753 27.4258 21.8516 26.4102 21.9297 25.2773C22.0078 24.0013 22.3268 22.862 22.8867 21.8594C23.4466 20.8438 24.1628 19.9844 25.0352 19.2812C25.9206 18.5781 26.9232 18.0443 28.043 17.6797C29.1758 17.3151 30.3542 17.1458 31.5781 17.1719C32.8542 17.1979 33.9805 17.4453 34.957 17.9141C35.9466 18.3698 36.7669 18.9948 37.418 19.7891C38.069 20.5703 38.5508 21.4948 38.8633 22.5625C39.1888 23.6172 39.332 24.7565 39.293 25.9805L33.707 25.9609C33.7331 25.4792 33.7201 25.0039 33.668 24.5352C33.6159 24.0534 33.4987 23.6172 33.3164 23.2266C33.1341 22.8359 32.8607 22.5234 32.4961 22.2891C32.1445 22.0417 31.6758 21.9115 31.0898 21.8984C30.582 21.8984 30.1198 21.9831 29.7031 22.1523C29.2865 22.3216 28.9219 22.5625 28.6094 22.875C28.2969 23.1875 28.0365 23.5521 27.8281 23.9688C27.6328 24.3854 27.5091 24.8346 27.457 25.3164C27.3919 25.8242 27.4505 26.2799 27.6328 26.6836C27.8281 27.0742 28.0885 27.4323 28.4141 27.7578C28.7396 28.0703 29.1107 28.3503 29.5273 28.5977C29.944 28.8451 30.3542 29.0599 30.7578 29.2422C31.7604 29.7109 32.6784 30.2318 33.5117 30.8047C34.3451 31.3646 35.0482 32.0091 35.6211 32.7383C36.207 33.4544 36.6432 34.2747 36.9297 35.1992C37.2292 36.1107 37.3333 37.1654 37.2422 38.3633C37.151 39.6523 36.8385 40.8047 36.3047 41.8203C35.7839 42.8229 35.1003 43.6693 34.2539 44.3594C33.4206 45.0365 32.4505 45.5573 31.3438 45.9219C30.237 46.2734 29.0586 46.4362 27.8086 46.4102C26.4414 46.3841 25.2174 46.1302 24.1367 45.6484C23.069 45.1667 22.1641 44.5091 21.4219 43.6758C20.6927 42.8424 20.1458 41.8594 19.7812 40.7266C19.4167 39.5807 19.2604 38.3438 19.3125 37.0156L24.9375 37.0352C24.8984 37.6602 24.9115 38.2591 24.9766 38.832C25.0417 39.3919 25.1914 39.8867 25.4258 40.3164C25.6732 40.7461 26.0182 41.0911 26.4609 41.3516C26.9036 41.599 27.4896 41.7227 28.2188 41.7227C29.2344 41.7096 30.0286 41.3971 30.6016 40.7852C31.1875 40.1732 31.5391 39.3789 31.6562 38.4023Z" fill="white"></path>
                    </svg>
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={2} textAlign="center">
                    <img src={logoRival} alt="" width="100%" style={{ maxWidth: "45px" }} />
                </Grid>
            </Grid>
        </Grid >
    )
}

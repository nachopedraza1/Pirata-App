import { useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom"

import { AuthButtons, Logo, UserButtons } from "./Components";

import { Container, AppBar, Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Link } from "@mui/material"
import { GroupsRounded, HomeRounded, MenuOpenOutlined, MenuOutlined, NearMe, SportsEsports } from '@mui/icons-material'

const navItems = [{ text: "INICIO", ref: "" }, { text: "EL PROYECTO", ref: "project" }, { text: "ESPORTS", ref: "teams" }, { text: "CONTACTO", ref: "contact" }]

export const Navbar = () => {

    const [menuState, setMenuState] = useState(false);

    const { status } = useSelector(state => state.auth);

    const handleDrawerToggle = () => {
        setMenuState(!menuState);
    };

    return (
        <>
            <AppBar
                color="background"
                position="fixed"
                sx={{
                    backgraund: "black"
                }}
            >
                <Container maxWidth="lg" disableGutters >
                    <Toolbar>

                        <IconButton sx={{ mr: 2, p: 0, display: { md: "none" } }} onClick={() => setMenuState(!menuState)}>
                            <MenuOutlined sx={{ fontSize: 30 }} color="tertiary" />
                        </IconButton>

                        <Grid container width="93%" display={{ xs: "flex", md: "none" }} position="absolute" justifyContent="center" zIndex="-1">
                            <img src="/assets/images/Logo.png" alt="" width="70px" />
                        </Grid>

                        <Grid container direction="row" wrap="nowrap" justifyContent={{ xs: "center", md: "space-between" }} alignItems="center">

                            <Grid container alignItems="center" gap={2}>
                                <Grid item display={{ xs: "none", md: "flex" }} >
                                    <Logo size="65px" />
                                </Grid>

                                <Grid item sx={{ display: { xs: 'none', md: 'flex', borderLeft: "2px solid #2192FF", paddingLeft: "5px" } }}>
                                    {navItems.map((item) => (
                                        <Link component={RouterLink} to={`/${item.ref}`} underline="none" key={item.text}>
                                            <Button disableTouchRipple sx={{ color: '#fff', "&:hover": { color: "primary.main" } }}>
                                                {item.text}
                                            </Button>
                                        </Link>
                                    ))}
                                </Grid>
                            </Grid>

                            <Grid item >
                                <Box sx={{ display: { xs: "none", md: "block" } }}>
                                    {(status === "not-authenticated") && <AuthButtons />}
                                </Box>
                                {(status === "authenticated") && <UserButtons />}
                            </Grid>
                        </Grid>

                    </Toolbar>
                </Container>
            </AppBar >


            {/* Responsive Navbar */}
            <Drawer
                variant="temporary"
                open={menuState}
                sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: "270px", backgroundColor: "black" } }}
                onClose={handleDrawerToggle}
            >
                <Toolbar sx={{ pl: "24px", justifyContent: "space-between" }} >
                    <IconButton sx={{ mr: 2, p: 0 }} onClick={handleDrawerToggle}>
                        <MenuOpenOutlined sx={{ fontSize: 30, color: "white" }} />
                    </IconButton>

                    <Logo size="60px" />
                </Toolbar>

                <Divider sx={{ backgroundColor: "white" }} />

                <List sx={{ p: 1 }}>
                    {
                        navItems.map(item => (
                            <ListItem component={RouterLink} to={`/${item.ref}`} key={item.text} disablePadding sx={{ color: "white" }}  >
                                <ListItemButton onClick={handleDrawerToggle}>
                                    <ListItemIcon sx={{ color: "primary.main" }}>
                                        {
                                            (item.text === "INICIO") ? < HomeRounded /> :
                                                (item.text === "EL PROYECTO") ? < GroupsRounded /> :
                                                    (item.text === "ESPORTS") ? < SportsEsports /> :
                                                        < NearMe />
                                        }
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={item.text} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

                <Divider sx={{ backgroundColor: "white", mb: 2 }} />
                {(status === "not-authenticated") && <AuthButtons />}
            </Drawer>
        </>
    )
}

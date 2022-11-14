import { useState } from "react";

import { Link as RouterLink } from 'react-router-dom'

import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { FormatListNumberedRounded, GroupsRounded, HomeRounded, LogoutOutlined, MenuOpenOutlined, MenuOutlined, SportsSoccerRounded, StorefrontRounded } from '@mui/icons-material'
import { AuthButtons } from "../Auth/Components/AuthButtons";
import { Logo } from "../Auth/Components/Logo";

const navItems = [{ text: "INICIO" }, { text: "PLANTEL" }, { text: "POSICIONES" }, { text: "FIXTURE" }, { text: "TIENDA OFICIAL" }]

export const Navbar = () => {

    const [menuState, setMenuState] = useState(false);

    return (
        <>
            <AppBar
                color="background"
                position="fixed"
                sx={{
                    backgraund: "black"
                }}
            >
                <Toolbar>

                    <IconButton sx={{ mr: 2, p: 0, display: { md: "none" } }} onClick={() => setMenuState(!menuState)}>
                        <MenuOutlined sx={{ fontSize: 30 }} color="tertiary" />
                    </IconButton>

                    <Grid container direction="row" wrap="nowrap" justifyContent="space-between" alignItems="center">

                        <Logo />

                        <Box sx={{ position: "absolute", width: "100%", justifyContent: "center", display: { xs: 'none', md: 'flex' } }}>
                            {navItems.map((item) => (
                                <Link underline="none" key={item.text}>
                                    <Button sx={{ color: '#fff', "&:hover": { color: "primary.main" } }}>
                                        {item.text}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box sx={{ display: {xs: "none", md: "flex" } }}>
                            <AuthButtons />
                        </Box>

                    </Grid>
                </Toolbar>
            </AppBar >


            <Drawer
                variant="temporary"
                open={menuState}
                sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: "250px", backgroundColor: "black" } }}
                onClose={() => setMenuState(false)}
            >
                <Toolbar >
                    <IconButton sx={{ p: { sm: "0" } }} onClick={() => setMenuState(false)}>
                        <MenuOpenOutlined sx={{ fontSize: 30, color: "white" }} />
                    </IconButton>
                </Toolbar>

                <Divider sx={{ backgroundColor: "white" }} />

                <List sx={{ p: 1 }}>
                    {
                        navItems.map(item => (
                            <ListItem key={item.text} disablePadding sx={{ color: "white" }} >
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: "primary.main" }}>
                                        {
                                            (item.text === "INICIO") ? < HomeRounded /> :
                                                (item.text === "PLANTEL") ? < GroupsRounded /> :
                                                    (item.text === "POSICIONES") ? < FormatListNumberedRounded /> :
                                                        (item.text === "FIXTURE") ? < SportsSoccerRounded /> :
                                                            (item.text === "TIENDA OFICIAL") ? < StorefrontRounded /> : ""
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

                <AuthButtons />
            </Drawer>
        </>
    )
}

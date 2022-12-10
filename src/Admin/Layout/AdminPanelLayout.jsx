import { useState } from 'react';
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { DoubleArrow, EmojiEvents, FiberNew, Groups2, Logout, MenuOpenOutlined, PersonAdd, Security, Settings, SportsEsports } from '@mui/icons-material';


const drawerWidth = 240;


const navlinks1 = [
    { text: 'Publicar Noticia', ref: "addmatches" },
    { text: 'Publicar Equipo', ref: "addteams" },
    { text: 'Publicar Partido', ref: "addmatches" },
    { text: 'Publicar Fecha', ref: "addmatches" }
];

const navlinks2 = [
    { text: 'Agregar Rivales', ref: "addrivals" },
    { text: 'Agregar Esports', ref: "addesports" },
    { text: 'Postulantes', ref: "addmatches" },
    { text: 'Ajustes', ref: "addmatches" },
];

export const AdminPanelLayout = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: "black", display: { sm: "none" }, justifyContent: "space-between" }}>
                <IconButton sx={{ mr: 2, p: 0 }} onClick={handleDrawerToggle}>
                    <MenuOpenOutlined sx={{ fontSize: 30, color: "white" }} />
                </IconButton>
                <img src="../src/assets/Logo.png" alt="" width="65px" />
            </Toolbar>
            <Divider />
            <List sx={{ flexDirection: "column" }}>
                {navlinks1.map(({ text, ref }) => (
                    <ListItem component={Link} to={`/admincp/${ref}`} key={text} disablePadding sx={{ color: "inherit" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    (text === "Publicar Noticia") ? <FiberNew /> :
                                        (text === "Publicar Equipo") ? <Groups2 /> :
                                            (text === "Publicar Partido") ? <EmojiEvents /> : <DoubleArrow />
                                }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List sx={{ flexDirection: "column" }}>
                {navlinks2.map(({ text, ref }) => (
                    <ListItem component={Link} to={`/admincp/${ref}`} key={text} disablePadding sx={{ color: "inherit" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    (text === "Agregar Rivales") ? <Security /> :
                                        (text === "Agregar Esports") ? <SportsEsports /> :
                                            (text === "Postulantes") ? <PersonAdd /> : <Settings />
                                }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Logout color='error' />
                    </ListItemIcon>
                    <ListItemText>Cerrar Sesion</ListItemText>
                </ListItemButton>
            </ListItem>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "black"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                bgcolor="backgraunds.black"
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: 2,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    height: "100%",
                    minHeight: "100vh"
                }}
            >
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}


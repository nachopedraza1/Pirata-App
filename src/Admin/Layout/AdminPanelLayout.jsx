import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from "react-router-dom";

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

import { DoubleArrow, EmojiEvents, FiberNew, Logout, MenuOpenOutlined, PersonAdd, Security, Settings, SportsEsports } from '@mui/icons-material';
import { startLogout } from '../../Redux/Thunks/thunks';


const drawerWidth = 240;


const navlinks1 = [
    { text: 'Publicar Noticia', ref: "addmatches" },
    { text: 'Publicar Partido', ref: "addmatches" },
    { text: 'Publicar Fecha', ref: "adddate" }
];

const navlinks2 = [
    { text: 'Agregar Rivales', ref: "addrivals" },
    { text: 'Agregar Liga', ref: "addleague" },
    { text: 'Agregar Esports', ref: "addesports" },
    { text: 'Postulantes', ref: "applicants" },
    { text: 'Ajustes', ref: "addmatches" },
];

export const AdminPanelLayout = (props) => {

    const dispatch = useDispatch();

    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const onLogout = () => {
        dispatch(startLogout())
    }


    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: "black", display: { sm: "none" }, justifyContent: "space-between" }}>
                <IconButton sx={{ mr: 2, p: 0 }} onClick={handleDrawerToggle}>
                    <MenuOpenOutlined sx={{ fontSize: 30, color: "white" }} />
                </IconButton>
                <img src="/assets/images/logo.png" alt="" width="65px" />
            </Toolbar>
            <Divider />
            <List >
                {navlinks1.map(({ text, ref }) => (
                    <ListItem component={RouterLink} to={`/admincp/${ref}`} key={text} disablePadding sx={{ color: "inherit" }}>
                        <ListItemButton onClick={handleDrawerToggle}>
                            <ListItemIcon>
                                {
                                    (text === "Publicar Noticia") ? <FiberNew /> :
                                        (text === "Publicar Partido") ? <EmojiEvents /> : <DoubleArrow />
                                }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List >
                {navlinks2.map(({ text, ref }) => (
                    <ListItem component={RouterLink} to={`/admincp/${ref}`} key={text} disablePadding sx={{ color: "inherit" }}>
                        <ListItemButton onClick={handleDrawerToggle}>
                            <ListItemIcon>
                                {
                                    (text === "Agregar Rivales") ? <Security /> :
                                        (text === "Agregar Liga") ? <EmojiEvents /> :
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
                    <ListItemText onClick={onLogout}>Cerrar Sesion</ListItemText>
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
                        zIndex: "10000",
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
                {children}
            </Box>

        </Box>
    );
}


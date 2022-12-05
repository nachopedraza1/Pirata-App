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

import { DoubleArrow, EmojiEvents, FiberNew, Groups2, Logout, PersonAdd, Security, Settings } from '@mui/icons-material';


const drawerWidth = 240;

'Noticias', 'Equipos', 'Partidos', 'Proximos partidos'

const navlinks1 = [
    { text: 'Noticias', ref: "addmatches" },
    { text: 'Equipos', ref: "addmatches" },
    { text: 'Partidos', ref: "addmatches" },
    { text: 'Proximos partidos', ref: "addmatches" }
];

const navlinks2 = [
    { text: 'Rivales', ref: "addrivals" },
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
            <Toolbar sx={{ backgroundColor: "black", display: { sm: "none" } }} />
            <Divider />
            <List>
                {navlinks1.map((link, index) => (
                    <ListItem component={Link} to={link.ref} key={link.text} disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    (link.text === "Noticias") ? <FiberNew /> :
                                        (link.text === "Equipos") ? <Groups2 /> :
                                            (link.text === "Partidos") ? <EmojiEvents /> : <DoubleArrow />
                                }
                            </ListItemIcon>
                            <ListItemText primary={link.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List >
                {navlinks2.map((link, index) => (
                    <ListItem component={Link} to={link.ref} key={link.text} disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    (link.text === "Rivales") ? <Security /> :
                                        (link.text === "Postulantes") ? <PersonAdd /> : <Settings />
                                }
                            </ListItemIcon>
                            <ListItemText primary={link.text} />
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
                        Responsive drawer
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
                bgcolor="#16171b"
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


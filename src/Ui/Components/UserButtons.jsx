import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, Typography, Button } from '@mui/material';
import { Logout, ManageAccountsOutlined, PersonAdd, Settings } from '@mui/icons-material';
import { startLogout } from '../../Redux/Thunks';

export const UserButtons = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const { photoURL, displayName } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(startLogout())
    }


    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Button
                    onClick={handleClick}
                    size="small"
                    sx={{ p: 0 }}
                >
                    <Box display="flex" alignItems="center" gap={1}>
                        <img src={photoURL} alt="" width="40px" style={{ borderRadius: "50%", marginInline: "10px" }} />
                        <Typography variant="p" color="white" noWrap sx={{ display: { xs: "none", sm: "block" } }}> {displayName} </Typography>
                        <ManageAccountsOutlined />
                    </Box>
                </Button>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Perfil
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Cambiar de Cuenta
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Ajustes
                </MenuItem>
                <MenuItem onClick={onLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Cerrar Sesion
                </MenuItem>
            </Menu>
        </>
    );
}
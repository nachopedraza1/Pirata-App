import { Link as RouterLink } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Box, Button, Link, Typography } from '@mui/material'

export const AuthButtons = () => {


    return (
        <Box display="flex" justifyContent="center" >
            {/* <IconButton>
                                <LogoutOutlined sx={{ fontSize: 30 }} color="tertiary" />
                            </IconButton> */}
            < Link component={RouterLink} to="/auth/login" underline="none" >
                <Button sx={{ backgroundColor: "whitesmoke", mr: 1, p: "4px 15px" }}>
                    <Typography variant="p">Ingresa</Typography>
                </Button>
            </Link >
            <Link component={RouterLink} to="/auth/register" underline="none">
                <Button sx={{ backgroundColor: "primary.main", p: "4px 15px" }}>
                    <Typography variant="p" color="tertiary.main" >Registrate</Typography>
                </Button>
            </Link>
        </Box >
    )
}

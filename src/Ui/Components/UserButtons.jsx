import { AccountCircleOutlined } from "@mui/icons-material"
import { Box, Button, Link, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from 'react-router-dom';
import { startLogout } from "../../Redux/Thunks/thunks"

export const UserButtons = () => {

    const { displayName } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout())
    }

    return (
        <Box display="flex" justifyContent="center">
            < Link component={RouterLink} to="/auth/login" underline="none" >
                <Button variant="outlined" sx={{ mr: 1, p: "4px 15px" }}>
                    <AccountCircleOutlined color="white" />
                    <Typography variant="p" ml={1} color="white"> {displayName} </Typography>
                </Button>
            </Link>
        </Box>
    )
}

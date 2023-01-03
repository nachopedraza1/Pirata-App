import { useState } from "react"

import { Button, Grid, Menu, MenuItem } from "@mui/material"
import { FilterList } from "@mui/icons-material";

const esports = [
    "Pro evolution soccer",
    "League of Legends",
    "Counter Strike",
    "Formula 1",
    "Fortnite",
    "Valorant",
    "Free fire",
    "Fifa",
    "No soy gamer",
    "Todos"];

const plataforms = [
    "Play Station 5",
    "Play Station 4",
    "Mobile",
    "XBOX",
    "PC",
]

export const FilterBar = ({ onFilterList, totalFiltered }) => {

    const [isOpen, setIsOpen] = useState(null);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Grid container gap={2} padding={1} justifyContent="end">
            <Grid item>
                <Button disableTouchRipple sx={{ color: "white" }}> Total: {totalFiltered} </Button>
            </Grid>
            <Grid item>
                <Button
                    endIcon={<FilterList />}
                    variant='outlined'
                    id="basic-button"
                    onClick={(e) => { handleClick(e), setIsOpen(1) }}
                >
                    Esport
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open && isOpen === 1}
                    onClose={handleClose}
                >
                    {
                        esports.map(esport => (<MenuItem key={esport} onClick={() => { onFilterList("esport", esport), handleClose() }}> {esport} </MenuItem>))
                    }
                </Menu>
            </Grid>
            <Grid item>
                <Button
                    endIcon={<FilterList />}
                    variant='outlined'
                    id="basic-button"
                    onClick={(e) => { handleClick(e), setIsOpen(2) }}
                >
                    Plataform
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open && isOpen === 2}
                    onClose={handleClose}
                >
                    {
                        plataforms.map(plataform => (<MenuItem key={plataform} onClick={() => { onFilterList("plataform", plataform), handleClose() }}> {plataform} </MenuItem>))
                    }
                </Menu>
            </Grid>
        </Grid>
    )
}
